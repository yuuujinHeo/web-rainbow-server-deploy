// import crypto from 'crypto';
// import * as fs from 'fs';

export class CryptoUtil {
  //   private static algorithm = 'aes-256-cbc';
  //   private static secretKey = Buffer.from(
  //     process.env.CRYPTO_SECRET_KEY as string,
  //     'hex',
  //   );
  //   private static iv = Buffer.from(process.env.CRYPTO_IV as string, 'hex');
  //   static encrypt(filePath: string, outputFilePath: string): void {
  //     const cipher = crypto.createCipheriv(
  //       this.algorithm,
  //       this.secretKey,
  //       this.iv,
  //     );
  //     const input = fs.createReadStream(filePath);
  //     const output = fs.createWriteStream(outputFilePath);
  //     input.pipe(cipher).pipe(output);
  //   }
  //   static decrypt(filePath: string, outputFilePath: string): void {
  //     const decipher = crypto.createDecipheriv(
  //       this.algorithm,
  //       this.secretKey,
  //       this.iv,
  //     );
  //     const input = fs.createReadStream(filePath);
  //     const output = fs.createWriteStream(outputFilePath);
  //     input.pipe(decipher).pipe(output);
  //   }
}
