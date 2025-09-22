export declare class PaginationRequest {
    pageNo?: number;
    pageSize?: number;
    getOffset(): number;
    getLimit(): number;
}
export declare function getPaginationOffset(pageNo: number, pageSize: number): number;
export declare function getPaginationLimit(pageSize: number): number;
