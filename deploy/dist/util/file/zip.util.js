"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipUtil = void 0;
const AdmZip = require("adm-zip");
const fs_1 = require("fs");
const path_1 = require("path");
const logger_1 = require("../../logger");
const microservices_1 = require("@nestjs/microservices");
class ZipUtil {
    static async zipFolder(sourcePath, zipPath) {
        try {
            logger_1.LoggerService.get('util').info(`[ZIP] zipFolder: ${sourcePath} -> ${zipPath}`);
            const zip = new AdmZip();
            const addFilesRecursively = async (folderPath, zipFolderPath = '') => {
                const files = (0, fs_1.readdirSync)(folderPath);
                files.forEach((file) => {
                    const filePath = (0, path_1.join)(folderPath, file);
                    const stat = (0, fs_1.statSync)(filePath);
                    if (stat.isDirectory()) {
                        addFilesRecursively(filePath, (0, path_1.join)(zipFolderPath, file));
                    }
                    else {
                        zip.addLocalFile(filePath, zipFolderPath);
                    }
                });
            };
            addFilesRecursively(sourcePath);
            zip.writeZip(zipPath);
            logger_1.LoggerService.get('util').info(`[ZIP] zipFolder: successfully done ${sourcePath} -> ${zipPath}`);
            return true;
        }
        catch (error) {
            if (error instanceof microservices_1.RpcException)
                throw error;
            logger_1.LoggerService.get('util').error(`[ZIP] zipFolder: ${(0, logger_1.errorToJson)(error)}`);
            throw new microservices_1.RpcException('파일을 압축할 수 없습니다.');
        }
    }
    static async unzipFolder(zipPath, targetPath) {
        try {
            logger_1.LoggerService.get('util').info(`[ZIP] unzipFoler: ${zipPath} -> ${targetPath}`);
            const zip = new AdmZip(zipPath);
            if (!(0, fs_1.existsSync)(targetPath)) {
                (0, fs_1.mkdirSync)(targetPath, { recursive: true });
            }
            zip.extractAllTo(targetPath, true);
            logger_1.LoggerService.get('util').info(`[ZIP] unzipFoler: successfully done ${zipPath} -> ${targetPath}`);
            return true;
        }
        catch (error) {
            logger_1.LoggerService.get('util').error(`[ZIP] unzipFoler: ${zipPath} -> ${targetPath}, ${(0, logger_1.errorToJson)(error)}`);
            throw new microservices_1.RpcException('파일을 압축 해제할 수 없습니다.');
        }
    }
}
exports.ZipUtil = ZipUtil;
