export declare class ZipUtil {
    static zipFolder(sourcePath: string, zipPath: string): Promise<boolean>;
    static unzipFolder(zipPath: string, targetPath: string): Promise<boolean>;
}
