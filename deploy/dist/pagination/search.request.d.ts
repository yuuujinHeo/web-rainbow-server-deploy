import { PaginationRequest } from './pagination.request';
export declare class SearchRequestDto extends PaginationRequest {
    searchType?: string;
    searchText?: string;
    sortOption?: string;
    sortDirection?: string;
    dateFrom?: string;
    dateTo?: string;
}
