export declare class PaginationResponse<T> {
    pageSize?: number;
    totalCount?: number;
    totalPage?: number;
    list: T[];
    constructor(list: T[], pageSize?: number, totalCount?: number);
}
