export declare class DateUtil {
    static toDatetimeString(date: Date): string;
    static getTimeString(): string;
    static convertTargetsToDatetimeString<T>(param: T, targets: string[]): T;
    static formatDate(date: Date): string;
    static formatDateKST(date: Date): string;
    static formatTimeKST(date: Date): string;
    static formatTimeYearKST(date: Date): string;
    static formatTimeMonthKST(date: Date): string;
    static formatTimeDayKST(date: Date): string;
    static formatTimeHourKST(date: Date): string;
    static formatTimeMinuteKST(date: Date): string;
    static formatTimeSecondKST(date: Date): string;
}
