import * as z from 'zod';
export declare const DeleteCacheByKeyRequestDto: z.ZodObject<{
    key: z.ZodString;
    selected_db: z.ZodNumber;
    server: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    key?: string;
    server?: string;
    selected_db?: number;
}, {
    key?: string;
    server?: string;
    selected_db?: number;
}>;
export type DeleteCacheByKeyRequestDto = z.infer<typeof DeleteCacheByKeyRequestDto>;
