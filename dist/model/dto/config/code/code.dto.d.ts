export declare class CreateCodeDto {
    codeId: string;
    code: string;
    codeName: string;
    codeDesc?: string;
    parentCode?: string;
    sortOrder?: number;
    useYn: string;
    createdBy?: string;
}
export declare class UpdateCodeDto {
    code?: string;
    codeName?: string;
    codeDesc?: string;
    parentCode?: string;
    sortOrder?: number;
    useYn?: string;
    updatedBy?: string;
}
export declare class ReadCodeDto {
    codeId?: string;
    code?: string;
    codeName?: string;
    codeDesc?: string;
    parentCode?: string;
    sortOrder?: number;
    useYn?: string;
    pageNo?: number;
    pageSize?: number;
    searchType?: string;
    searchText?: string;
    createdAt?: string;
    createdAtStart?: string;
    createdAtEnd?: string;
    updatedAt?: string;
    updatedAtStart?: string;
    updatedAtEnd?: string;
    createdBy?: string;
    updatedBy?: string;
}
export declare class CodeResponseDto {
    codeId?: string;
    code?: string;
    codeName?: string;
    codeDesc?: string;
    parentCode?: string;
    sortOrder?: number;
    useYn?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
}
export declare class CodeDataDto {
    codeId?: string;
    code?: string;
    codeName?: string;
    codeDesc?: string;
    parentCode?: string;
    sortOrder?: number;
    useYn?: string;
    createdAt?: string;
    updatedAt?: string;
    createdBy?: string;
    updatedBy?: string;
}
export declare class CodeListResponseDto {
    pageNo: number;
    pageSize: number;
    totalCount: number;
    totalPage: number;
    searchType?: string;
    searchText?: string;
    createdAtStart?: string;
    createdAtEnd?: string;
    updatedAtStart?: string;
    updatedAtEnd?: string;
    data: CodeDataDto[];
}
export declare class CreateCodeResponseDto {
    codeId: string;
    code: string;
    codeName: string;
    codeDesc: string;
    parentCode: string;
    sortOrder: number;
    useYn: string;
    createdAt: string;
    createdBy: string;
}
export declare class UpdateCodeResponseDto {
    codeId: string;
    code: string;
    codeName: string;
    codeDesc: string;
    parentCode: string;
    sortOrder: number;
    useYn: string;
    updatedAt: string;
    updatedBy: string;
}
export declare class DeleteCodeResponseDto {
    codeId: string;
    code: string;
    codeName: string;
    codeDesc: string;
    parentCode: string;
    sortOrder: number;
    useYn: string;
    createdAt: string;
    updatedAt: string;
    createdBy: string;
    updatedBy: string;
}
