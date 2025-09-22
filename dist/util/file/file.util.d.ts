import { Response } from 'express';
export declare class FileUtil {
    private static basePath;
    private static checkBasePath;
    static getFile(filename: string, filePath: string): Promise<Buffer<ArrayBufferLike>>;
    static getFileAt(filename: string, filePath: string): Promise<boolean>;
    static uploadFile(fileBuffer: Buffer, filename: string): Promise<{
        filePath: string;
        fileName: string;
    }>;
    static downloadFile(filename: string, compress?: boolean): Promise<Buffer<ArrayBufferLike>>;
    static deleteFile(filename: string): Promise<void>;
    static compressFile(filePath: string, outputPath: string, outputName?: string): Promise<string>;
    static decompressFile(filePath: string, outputPath?: string): Promise<string>;
    static readCSV(path: string): Promise<string[][]>;
    static readCSVPipe(path: string, res: Response): Promise<void>;
    static saveCSV(path: string, data: string[][]): Promise<void>;
    static readJson(dir: string): Promise<Record<string, string>>;
    static readJSONPipe(path: string, res: Response): Promise<void>;
    static saveJson(dir: string, data: string | JSON): Promise<void>;
}
