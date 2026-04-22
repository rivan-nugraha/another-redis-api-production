import * as z from 'zod';
export declare const GetCacheByKeyRequestDto: z.ZodObject<{
    keys: z.ZodString;
    selected_db: z.ZodString;
    server: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    keys?: string;
    server?: string;
    selected_db?: string;
}, {
    keys?: string;
    server?: string;
    selected_db?: string;
}>;
export type GetCacheByKeyRequestDto = z.infer<typeof GetCacheByKeyRequestDto>;
