import * as AdmZip from 'adm-zip';
import { existsSync, mkdirSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { errorToJson, LoggerService } from '../../logger';
import { RpcException } from '@nestjs/microservices';

export class ZipUtil {
  static async zipFolder(sourcePath: string, zipPath: string): Promise<boolean> {
    try {
      /// Adm Zip 생성
      LoggerService.get('util').info(`[ZIP] zipFolder: ${sourcePath} -> ${zipPath}`);
      const zip = new AdmZip();

      const addFilesRecursively = async (folderPath: string, zipFolderPath: string = '') => {
        const files = readdirSync(folderPath);

        files.forEach((file) => {
          const filePath = join(folderPath, file);
          const stat = statSync(filePath);

          if (stat.isDirectory()) {
            // 하위 폴더가 있다면 재귀적으로 처리
            addFilesRecursively(filePath, join(zipFolderPath, file));
          } else {
            // 파일이라면 압축에 추가
            zip.addLocalFile(filePath, zipFolderPath);
          }
        });
      };

      // 폴더 내 파일 및 하위 폴더를 재귀적으로 압축에 추가
      addFilesRecursively(sourcePath);

      // 압축 파일 생성
      zip.writeZip(zipPath);
      LoggerService.get('util').info(`[ZIP] zipFolder: successfully done ${sourcePath} -> ${zipPath}`);
      return true;
    } catch (error) {
      if (error instanceof RpcException) throw error;
      LoggerService.get('util').error(`[ZIP] zipFolder: ${errorToJson(error)}`);
      throw new RpcException('파일을 압축할 수 없습니다.');
    }
  }

  static async unzipFolder(zipPath: string, targetPath: string): Promise<boolean> {
    try {
      LoggerService.get('util').info(`[ZIP] unzipFoler: ${zipPath} -> ${targetPath}`);

      const zip = new AdmZip(zipPath);

      // 압축 해제할 경로가 없다면 생성
      if (!existsSync(targetPath)) {
        mkdirSync(targetPath, { recursive: true });
      }

      // 압축 해제
      zip.extractAllTo(targetPath, true); // true는 기존 파일 덮어쓰기를 의미

      LoggerService.get('util').info(`[ZIP] unzipFoler: successfully done ${zipPath} -> ${targetPath}`);

      return true;
    } catch (error) {
      LoggerService.get('util').error(`[ZIP] unzipFoler: ${zipPath} -> ${targetPath}, ${errorToJson(error)}`);
      throw new RpcException('파일을 압축 해제할 수 없습니다.');
    }
  }
}
