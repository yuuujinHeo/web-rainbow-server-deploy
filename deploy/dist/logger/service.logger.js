"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const winston_1 = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const util_1 = require("../util");
const chalk_1 = require("chalk");
const fs_1 = require("fs");
const levelColorMap = {
    error: chalk_1.default.red,
    warn: chalk_1.default.magenta,
    info: chalk_1.default.blue,
    debug: chalk_1.default.white,
};
const levelTextMap = {
    error: 'Error',
    warn: 'Warn',
    info: 'Info',
    debug: 'Debug',
};
function formatLogMessage(message) {
    try {
        if (message.includes('items:')) {
            return message;
        }
        const jsonRegex = /:\s*(\[.*?\]|\{.*?\})/g;
        return message.replace(jsonRegex, (match, jsonStr) => {
            try {
                const data = JSON.parse(jsonStr);
                const formatted = formatDataRecursive(data);
                return `: ${formatted}`;
            }
            catch {
                return match;
            }
        });
    }
    catch {
        return message;
    }
}
function formatDataRecursive(data) {
    if (Array.isArray(data)) {
        if (data.length <= 4) {
            const items = data.map((item) => {
                if (typeof item === 'object' && item !== null) {
                    return formatDataRecursive(item);
                }
                return cleanJsonString(JSON.stringify(item));
            });
            return `[${items.join(', ')}]`;
        }
        else {
            const items = data.slice(0, 4).map((item) => {
                if (typeof item === 'object' && item !== null) {
                    return formatDataRecursive(item);
                }
                return cleanJsonString(JSON.stringify(item));
            });
            return `[${data.length} items: [${items.join(', ')}]...]`;
        }
    }
    if (typeof data === 'object' && data !== null) {
        const formatted = { ...data };
        for (const [key, value] of Object.entries(formatted)) {
            if (Array.isArray(value)) {
                formatted[key] = formatDataRecursive(value);
            }
            else if (typeof value === 'object' && value !== null) {
                formatted[key] = formatDataRecursive(value);
            }
        }
        return cleanJsonString(JSON.stringify(formatted));
    }
    return cleanJsonString(JSON.stringify(data));
}
function cleanJsonString(jsonStr) {
    return jsonStr.replace(/\\"/g, '"').replace(/\\\\/g, '\\');
}
const customFormat = winston_1.format.printf(({ timestamp, level, message }) => {
    const pid = process.pid;
    const levelColor = levelColorMap[level] || chalk_1.default.white;
    const levelText = levelTextMap[level] || level;
    if (typeof message === 'string') {
        const contextTag = message ? chalk_1.default.yellow(`[${message}]`) : '';
        const categoryMatches = message.match(/\[([^\]]+)\]/g);
        const category = categoryMatches ? categoryMatches.map((match) => match.slice(1, -1)) : [];
        let logtext = message.replace(/\[[^\]]+\]/g, '').trim();
        logtext = formatLogMessage(logtext);
        return `${levelColor(`[${levelText}] ${pid}  -`)} ${util_1.DateUtil.formatDateKST(new Date(timestamp))}    ${levelColor(`LOG`)} ${chalk_1.default.yellow(`[${category}]`)} ${levelColor(`${logtext}`)}`;
    }
    return '';
});
const fileFormat = winston_1.format.printf(({ timestamp, level, message }) => {
    const pid = process.pid;
    const levelText = levelTextMap[level] || level;
    if (typeof message === 'string') {
        const contextTag = message ? chalk_1.default.yellow(`[${message}]`) : '';
        const categoryMatches = message.match(/\[([^\]]+)\]/g);
        const category = categoryMatches ? categoryMatches.map((match) => match.slice(1, -1)) : [];
        const logtext = message.replace(/\[[^\]]+\]/g, '').trim();
        return `[${levelText}] ${pid}  - ${util_1.DateUtil.formatDateKST(new Date(timestamp))}   LOG [${category}] ${logtext}`;
    }
});
const loggers = new Map();
class LoggerService {
    constructor(service) {
        const logPath = '/data/log/' + service;
        if (!(0, fs_1.existsSync)(logPath)) {
            (0, fs_1.mkdirSync)(logPath, { recursive: true });
        }
        chalk_1.default.level = 3;
        this.logger = (0, winston_1.createLogger)({
            level: 'debug',
            transports: [
                new DailyRotateFile({
                    filename: logPath + '/%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    level: 'debug',
                    format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), fileFormat),
                }),
                new winston_1.transports.Console({
                    level: 'debug',
                    format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), customFormat),
                }),
            ],
        });
    }
    static get(service) {
        if (!loggers.has(service)) {
            loggers.set(service, new LoggerService(service));
        }
        return loggers.get(service);
    }
    error(str) {
        this.logger.error(str);
    }
    warn(str) {
        this.logger.warn(str);
    }
    info(str) {
        this.logger.info(str);
    }
    debug(str) {
        this.logger.debug(str);
    }
}
exports.LoggerService = LoggerService;
