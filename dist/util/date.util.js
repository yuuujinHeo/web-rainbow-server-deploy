"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtil = void 0;
const date_fns_1 = require("date-fns");
class DateUtil {
    static toDatetimeString(date) {
        return (0, date_fns_1.format)(date, 'yyyy-MM-dd HH:mm:ss');
    }
    static getTimeString() {
        return new Date().getTime().toString();
    }
    static convertTargetsToDatetimeString(param, targets) {
        const sParam = { ...param };
        targets.forEach((target) => {
            if (sParam[target]) {
                sParam[target] = DateUtil.toDatetimeString(new Date(sParam[target]));
            }
        });
        return sParam;
    }
    static formatDate(date) {
        const pad = (n) => n.toString().padStart(2, '0');
        return (`${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
            `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`);
    }
    static formatDateKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.year}-${obj.month}-${obj.day} ${obj.hour}:${obj.minute}:${obj.second}`;
    }
    static formatTimeKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.hour}:${obj.minute}:${obj.second}`;
    }
    static formatTimeYearKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.year}`;
    }
    static formatTimeMonthKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.month}`;
    }
    static formatTimeDayKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.day}`;
    }
    static formatTimeHourKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.hour}`;
    }
    static formatTimeMinuteKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.minute}`;
    }
    static formatTimeSecondKST(date) {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const parts = new Intl.DateTimeFormat('ko-KR', options).formatToParts(date);
        const obj = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
        return `${obj.second}`;
    }
}
exports.DateUtil = DateUtil;
