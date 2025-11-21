import winston, { createLogger, format, transports } from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { DateUtil } from '@app/common/util';
import chalk from 'chalk';
import { chownSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { CleanLogService } from './cleanLog.service';

const levelColorMap = {
  error: chalk.red,
  warn: chalk.magenta,
  info: chalk.blue,
  debug: chalk.white,
};

const levelTextMap = {
  error: 'Error',
  warn: 'Warn',
  info: 'Info',
  debug: 'Debug',
};

// 로그 메시지에서 배열 데이터 축소 처리
function formatLogMessage(message: string): string {
  try {
    // 이미 축소된 형태의 데이터는 건드리지 않음
    if (message.includes('items:')) {
      return message;
    }

    // JSON 형태의 데이터를 찾아서 처리
    const jsonRegex = /:\s*(\[[\s\S]*?\]|\{[\s\S]*?\})/g;
    return message.replace(jsonRegex, (match, jsonStr) => {
      try {
        const data = JSON.parse(jsonStr);
        const formatted = formatDataRecursive(data);
        return `: ${formatted}`;
      } catch {
        return match; // JSON 파싱 실패시 원본 유지
      }
    });
  } catch {
    return message; // 에러 발생시 원본 메시지 반환
  }
}

// 재귀적으로 데이터 포맷팅 (API 인터셉터와 동일한 로직)
function formatDataRecursive(data: any): string {
  if (Array.isArray(data)) {
    if (data.length <= 4) {
      // 4개 이하일 때는 그냥 배열 표시
      const items = data.map((item) =>
        typeof item === 'object' && item !== null ? formatDataRecursive(item) : cleanJsonString(JSON.stringify(item)),
      );
      return `[${items.join(', ')}]`;
    } else {
      // 5개 이상일 때만 축소 표시
      const items = data
        .slice(0, 4)
        .map((item) => (typeof item === 'object' && item !== null ? formatDataRecursive(item) : cleanJsonString(JSON.stringify(item))));
      return `[${data.length} items: [${items.join(', ')}]...]`;
    }
  }

  if (typeof data === 'object' && data !== null) {
    const formatted = { ...data };

    // 객체 내의 모든 필드를 재귀적으로 처리
    for (const [key, value] of Object.entries(formatted)) {
      if (Array.isArray(value)) {
        formatted[key] = formatDataRecursive(value);
      } else if (typeof value === 'object' && value !== null) {
        formatted[key] = formatDataRecursive(value);
      }
    }

    return cleanJsonString(JSON.stringify(formatted));
  }

  return cleanJsonString(JSON.stringify(data));
}

// JSON 문자열에서 불필요한 이스케이프 문자 제거
function cleanJsonString(jsonStr: string): string {
  return jsonStr.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}

const customFormat = format.printf(({ timestamp, level, message }) => {
  const pid = process.pid;
  const levelColor = levelColorMap[level] || chalk.white;
  const levelText = levelTextMap[level] || level;

  if (typeof message === 'string') {
    const contextTag = message ? chalk.yellow(`[${message}]`) : '';
    // 카테고리 태그만 추출 (배열의 []는 제외)
    const categoryMatches = message.match(/\[(?!['"])[A-Za-z0-9 _-]+\]/g);
    const category = categoryMatches ? categoryMatches.map((match) => match.slice(1, -1)) : [];
    // 카테고리 태그만 제거하고 배열의 []는 보존
    let logtext = message.replace(/\[(?!['"])[A-Za-z0-9 _-]+\]/g, '').trim();

    // 배열 데이터 축소 처리
    logtext = formatLogMessage(logtext);

    return `${levelColor(`[${levelText}] ${pid}  -`)} ${DateUtil.formatDateKST(new Date(timestamp as string))}    ${levelColor(`LOG`)} ${chalk.yellow(`[${category}]`)} ${levelColor(`${logtext}`)}`;
  }

  return '';
});

const fileFormat = format.printf(({ timestamp, level, message }) => {
  const pid = process.pid;
  const levelText = levelTextMap[level] || level;
  if (typeof message === 'string') {
    const contextTag = message ? chalk.yellow(`[${message}]`) : '';

    // 카테고리 태그만 추출 (배열의 []는 제외)
    const categoryMatches = message.match(/\[(?!['"])[A-Za-z0-9 _-]+\]/g);
    const category = categoryMatches ? categoryMatches.map((match) => match.slice(1, -1)) : [];
    // 카테고리 태그만 제거하고 배열의 []는 보존
    let logtext = message.replace(/\[(?!['"])[A-Za-z0-9 _-]+\]/g, '').trim();
    return `[${levelText}] ${pid}  - ${DateUtil.formatDateKST(new Date(timestamp as string))}   LOG [${category}] ${logtext}`;
  }
});
const loggers = new Map<string, LoggerService>();

export class LoggerService {
  private logger: winston.Logger;
  private cleanLogService: CleanLogService;
  constructor(service: string) {
    const logPath = '/data/log/' + service;

    // 로그 폴더 존재 여부 확인 및 생성
    if (!existsSync(logPath)) {
      mkdirSync(logPath, { recursive: true });
    }

    try {
      chownSync(logPath, 1000, 1000);
    } catch (error) {
      console.error('LoggerService ChwonSync Error : ', error);
    }

    this.cleanLogService = new CleanLogService(logPath, 14);

    chalk.level = 3; // force enable full color
    this.logger = createLogger({
      level: 'debug',
      // format: format.combine(
      //   format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      //   fileFormat,
      // ),
      transports: [
        new DailyRotateFile({
          filename: logPath + '/%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          level: 'debug',
          format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), fileFormat),
          zippedArchive: true,
          maxSize: '10m',
          maxFiles: '14d',
        }),
        new transports.Console({
          level: 'debug',
          format: format.combine(
            // format.colorize({ all: true }),  // 전체 줄에 색 적용
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            customFormat,
          ),
        }),
      ],
    });
  }

  static get(service: string): LoggerService {
    if (!loggers.has(service)) {
      loggers.set(service, new LoggerService(service));
    }
    return loggers.get(service)!;
  }

  error(str: string) {
    this.logger.error(str);
  }
  warn(str: string) {
    this.logger.warn(str);
  }
  info(str: string) {
    this.logger.info(str);
  }
  debug(str: string) {
    this.logger.debug(str);
  }

  cleanLogFiles() {}
}
