import { format } from 'date-fns';

export class DateUtil {
  static toDatetimeString(date: Date): string {
    return format(date, 'yyyy-MM-dd HH:mm:ss');
  }

  static getTimeString(): string {
    return new Date().getTime().toString();
  }

  static convertTargetsToDatetimeString<T>(param: T, targets: string[]): T {
    const sParam = { ...param };

    targets.forEach((target) => {
      if (sParam[target]) {
        sParam[target] = DateUtil.toDatetimeString(new Date(sParam[target])) as any;
      }
    });

    return sParam as T;
  }

  static formatDate(date: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');

    return (
      `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ` +
      `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
    );
  }

  static formatDateKST(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
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

  static formatTimeKST(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
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

  static formatTimeYearKST(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
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
  static formatTimeMonthKST(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
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

  static formatTimeDayKST(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
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
  static formatTimeHourKST(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
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

  static formatTimeMinuteKST(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
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

  static formatTimeSecondKST(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
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
