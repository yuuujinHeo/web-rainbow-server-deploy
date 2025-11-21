// log-cleanup.service.ts
import { Injectable, Logger, LoggerService } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as fs from 'fs';
import * as path from 'path';
import { promises as fsp } from 'fs';

@Injectable()
export class CleanLogService {
  private readonly LOG_ROOT = process.env.LOG_ROOT ?? '/data/log';
  private readonly RETAIN_DAYS = Number(process.env.LOG_RETAIN_DAYS ?? '10');

  constructor(path: string, retainDays: number) {
    this.LOG_ROOT = path;
    this.RETAIN_DAYS = retainDays;
    console.log('=========================CleanLogService ', path, retainDays);
  }

  @Cron(CronExpression.EVERY_MINUTE)
  async handleCron() {
    console.log(`🧹 로그 정리 시작 (root=${this.LOG_ROOT}, retain=${this.RETAIN_DAYS}d)`);
    try {
      await this.cleanDir(this.LOG_ROOT);
      console.log('🧹 로그 정리 완료');
    } catch (e) {
      console.error('로그 정리 중 오류 발생', e as Error);
    }
  }

  private async cleanDir(dir: string): Promise<void> {
    let entries: fs.Dirent[];
    try {
      entries = await fsp.readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // 서비스별 하위 폴더 재귀 탐색
        await this.cleanDir(fullPath);
        continue;
      }

      // 로그만 대상으로 (원하면 패턴 더 좁혀도 됨)
      if (!entry.name.endsWith('.log') && !entry.name.endsWith('.log.gz')) {
        continue;
      }

      let stat: fs.Stats;
      try {
        stat = await fsp.stat(fullPath);
      } catch {
        continue;
      }

      if (this.isOlderThan(stat.mtime, this.RETAIN_DAYS)) {
        console.log(`🗑 delete: ${fullPath}`);
        try {
          await fsp.unlink(fullPath);
        } catch (e) {
          console.warn(`삭제 실패: ${fullPath} (${(e as Error).message})`);
        }
      }
    }
  }

  private isOlderThan(mtime: Date, days: number): boolean {
    const now = Date.now();
    const diffMs = now - mtime.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    return diffDays > days;
  }
}
