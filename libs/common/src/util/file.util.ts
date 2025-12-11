import * as fs from 'fs';
import * as path from 'path';
import * as unzipper from 'unzipper';
import * as il from 'iconv-lite';
import { v4 as uuidv4 } from 'uuid';
import archiver from 'archiver';
import * as csv from 'csv';
import { createGzip } from 'zlib';
import { Response } from 'express';
import { RpcCodeException } from '../exception/RpcCodeException';
import { GrpcCode } from '../grpc/constant';
import { RpcException } from '@nestjs/microservices';


export class FileUtil {
  private static basePath: string;

  static init(basePath: string) {
    this.basePath = basePath;

    if (!fs.existsSync(this.basePath)) {
      fs.mkdirSync(this.basePath, { recursive: true });
    }
  }

  private static checkBasePath() {
    if (!this.basePath) {
      throw new Error(
        'FileUtil not initialized. Call FileUtil.init(basePath) first.',
      );
    }
  }

  static async getFile(filename: string, filePath: string) {
    try {
      this.checkBasePath();
      const fileFullPath = path.join(this.basePath, filePath, filename);

      if (!fs.existsSync(fileFullPath)) {
        throw new Error(`File not found: ${fileFullPath}`);
      }

      return await fs.promises.readFile(fileFullPath);
    } catch (error) {
      throw error;
    }
  }

  static async getFileAt(filename: string, filePath: string) {
    try {
      this.checkBasePath();
      const fileFullPath = path.join(filePath, filename);

      return fs.existsSync(fileFullPath);
    } catch (error) {
      throw error;
    }
  }

  static async uploadFile(fileBuffer: Buffer, filename: string) {
    try {
      this.checkBasePath();

      const uniqueName = `${uuidv4()}${path.extname(filename)}`;
      const filePath = path.join(this.basePath, uniqueName);

      fs.writeFileSync(filePath, fileBuffer);

      return { filePath: filePath, fileName: uniqueName };
    } catch (error) {
      throw error;
    }
  }

  static async downloadFile(filename: string, compress?: boolean) {
    try {
      this.checkBasePath();

      const filePath = path.join(this.basePath, filename);
      const fileExtension = path.extname(filename);

      if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}`);
      }

      if (compress && fileExtension.toUpperCase() !== '.ZIP') {
        const outputPath = path.join(
          this.basePath,
          filename.substring(0, filename.lastIndexOf(fileExtension)),
        );
        await this.compressFile(filePath, outputPath);

        const fileContent = await fs.promises.readFile(outputPath);
        await fs.promises.unlink(outputPath);

        return fileContent;
      }

      return await fs.promises.readFile(filePath);
    } catch (error) {
      throw error;
    }
  }

  static async deleteFile(filename: string) {
    try {
      this.checkBasePath();

      const filePath = path.join(this.basePath, filename);

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      throw error;
    }
  }

  static async compressFile(
    filePath: string,
    outputPath: string,
    outputName?: string,
  ) {
    try {
      this.checkBasePath();

      const compressPath = outputName
        ? path.join(this.basePath, `${outputName}.zip`)
        : outputPath;
      const output = fs.createWriteStream(compressPath);
      const archive = archiver('zip', {
        zlib: { level: 9 },
      });

      archive.pipe(output);
      archive.directory(filePath, false);
      await archive.finalize();

      return compressPath;
    } catch (error) {
      throw error;
    }
  }

  static async decompressFile(filePath: string, outputPath?: string) {
    try {
      this.checkBasePath();

      if (!outputPath) {
        outputPath = filePath.substring(
          0,
          filePath.indexOf(path.extname(filePath)),
        );
      }

      if (!fs.existsSync(outputPath)) {
        await fs.promises.mkdir(outputPath, { recursive: true });
      }

      const directory = await unzipper.Open.file(filePath);
      for (const entry of directory.files) {
        const entryPath = entry.isUnicode
          ? entry.path
          : il.decode(entry.pathBuffer, 'euc-kr');
        const fullPath = path.join(outputPath, entryPath);

        if (entry.type === 'File') {
          await fs.promises.mkdir(path.dirname(fullPath), { recursive: true });

          const readStream = entry.stream();
          const writeStream = fs.createWriteStream(fullPath);
          readStream.pipe(writeStream);

          await new Promise((resolve, reject) => {
            writeStream.on('finish', () => resolve);
            writeStream.on('error', reject);
          });
        } else {
          await fs.promises.mkdir(fullPath, { recursive: true });
        }
      }

      return outputPath;
    } catch (error) {
      throw error;
    }
  }

  static async readCSV(path: string): Promise<string[][]> {
    return new Promise((resolve, reject) => {
      try{
        /// 1) 파일 존재여부 확인
        if(!fs.existsSync(path)){
          reject(new RpcCodeException('파일이 존재하지 않습니다',GrpcCode.NotFound));
        }

        /// 2) 파일 읽기 권한 확인
        fs.accessSync(path, fs.constants.R_OK);

        /// 3) 파일 읽고 스트리밍 (res 변수없으면 파일 내용 전부 읽어서 반환)
        const results: string[][] = [];
        fs.createReadStream(path)
        .pipe(csv.parse({
            skip_empty_lines: true,
            skip_records_with_error: true}))
        .on('data', (row) => {
          results.push(row);
        })
        .on('error', (error) => {
          // LoggerService.get('util').error(`[File] readCSV : ${errorToJson(error)}`)
          reject(new RpcCodeException('CSV 파일을 읽을 수 없습니다.',GrpcCode.InternalError));
        })
        .on('end', () => {
          // LoggerService.get('util').debug(`[File] readCSV : done (length : ${results.length})`)
          resolve(results);
        });
      }catch(error){
        if(error instanceof RpcException) throw error;
        // LoggerService.get('util').error(`[File] readCSV : ${errorToJson(error)}`)
        reject(new RpcCodeException('CSV 파일을 읽을 수 없습니다.',GrpcCode.InternalError));
      }
    });
  }

  static async readCSVPipe(path: string, res: Response): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        fs.open(path, 'r', (err) => {
          if (err) {
            reject(new RpcCodeException('파일을 찾을 수 없습니다.',GrpcCode.NotFound));
          } else {
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Encoding', 'gzip');
            res.setHeader(
              'Content-Disposition',
              'attachment; filename="cloud.csv.gz"',
            );

            const fileStream = fs.createReadStream(path);
            const gzip = createGzip();

            fileStream
              .pipe(gzip)
              .pipe(res)
              .on('finish', () => {
                // LoggerService.get('util').debug(`[File] readCSVPipe : done`)
                resolve();
              })
              .on('error', (error) => {
                // LoggerService.get('util').error(`[File] readCSVPipe : ${errorToJson(error)}`)
                reject(new RpcCodeException('CSV 파일을 읽을 수 없습니다.',GrpcCode.InternalError));
              });
          }
        });
      } catch (error) {
        if(error instanceof RpcException) throw error;
        // LoggerService.get('util').error(`[File] readCSVPipe : ${errorToJson(error)}`)
        reject(new RpcCodeException('CSV 파일을 읽을 수 없습니다.',GrpcCode.InternalError));
      }
    });
  }

  static async saveCSV(path: string, data: string[][]): Promise<void> {
    try {
      /// 1) 들어온 데이터가 배열형식인지 string형식인지 체크
      const csvData = data
        .map((row) => (Array.isArray(row) ? row.join(',') : row))
        .join('\n');

      /// 2) 파일 크기 확인
      if(data === undefined || data.length === 0){
        // LoggerService.get('util').error(`[File] saveCSV : data 값이 없습니다`);
        throw new RpcCodeException('data 값이 없습니다.',GrpcCode.InvalidArgument);
      }

      /// 3) 데이터를 파일로 저장
      fs.writeFileSync(path, csvData);
      // LoggerService.get('util').debug(`[File] saveCSV : done (path : ${path})`)
      return;
    } catch (error) {
      if(error instanceof RpcException) throw error;
      // LoggerService.get('util').error(`[File] saveCSV : ${errorToJson(error)}`)
      throw new RpcCodeException('CSV 파일을 저장하던 중 에러가 발생했습니다.',GrpcCode.InternalError);
    }
  }

  static async readJson(dir: string): Promise<Record<string, string>> {
    try {
      /// 1) 경로 확인
      if(dir === undefined || dir === ""){
        throw new RpcCodeException('dir 값이 없습니다.',GrpcCode.InvalidArgument);
      }

      /// 2) 파일 유무 확인
      if(!fs.openSync(dir, 'r')){
        throw new RpcCodeException(`경로의 파일이 존재하지 않습니다. (${dir})`,GrpcCode.NotFound);
      }

      /// 3) 파일 읽기
      const filecontent = fs.readFileSync(dir, 'utf-8');

      /// 4) JSON 형식으로 변환하여 반환
      return JSON.parse(filecontent);
    } catch (error) {
      if(error instanceof RpcException) throw error;
      // LoggerService.get('util').error(`[File] readJson : ${errorToJson(error)}`)
      throw new RpcCodeException('JSON 파일을 읽던 중 에러가 발생했습니다.',GrpcCode.InternalError);
    }
  }

  static async readJSONPipe(path: string, res: Response): Promise<void> {
    try {
      /// 1) 경로 확인
      if(path === undefined || path === ""){
        throw new RpcCodeException('path 값이 없습니다.',GrpcCode.InvalidArgument);
      }

      /// 2) 파일 유무 확인
      if(!fs.openSync(path, 'r')){
        throw new RpcCodeException(`경로의 파일이 존재하지 않습니다. (${path})`,GrpcCode.NotFound);
      }

      /// 3) 헤더 설정
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Content-Encoding', 'gzip');
      res.setHeader(
        'Content-Disposition',
        'attachment; filename="topo.json.gz"',
      );

      /// 4) 파일 스트림 생성
      const fileStream = fs.createReadStream(path);

      /// 5) gzip 압축
      const gzip = createGzip();

      /// 6) gzip 압축하여 스트리밍
      fileStream.pipe(gzip).pipe(res);
    } catch (error) {
      if(error instanceof RpcException) throw error;
      // LoggerService.get('util').error(`[File] readJSONPipe : ${errorToJson(error)}`)
      throw new RpcCodeException('JSON 파일을 읽던 중 에러가 발생했습니다.',GrpcCode.InternalError);
    }
  }

  static async saveJson(dir: string, data: string | JSON): Promise<void> {
    try {
      /// 1) 경로 확인
      if(dir === undefined || dir === ""){
        throw new RpcCodeException('dir 값이 없습니다.',GrpcCode.InvalidArgument);
      }

      /// 2) 데이터 확인
      if(data === undefined || data === "" || JSON.stringify(data) === ""){
        throw new RpcCodeException('data 값이 없습니다.',GrpcCode.InvalidArgument);
      }

      /// 3) 경로 생성
      fs.mkdirSync(dir, { recursive: true });
       
      /// 4) 파일 작성
      fs.writeFileSync(dir, JSON.stringify(data, null, 2));
      return;
    } catch (error) {
      if(error instanceof RpcException) throw error;
      // LoggerService.get('util').error(`[File] saveJson : ${errorToJson(error)}`)
      throw new RpcCodeException('JSON 파일을 저장하던 중 에러가 발생했습니다.',GrpcCode.InternalError);
    }
  }
}
