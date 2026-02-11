export declare class GetPaginationDto {
    skip: string;
    limit: string;
    sort_by?: Record<string, 'asc' | 'ascending' | 'desc' | 'descending'>;
    first: string;
}
