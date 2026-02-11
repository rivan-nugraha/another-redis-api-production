import * as z from 'zod';
export declare const GetCacheByKeyRequestDto: z.ZodObject<{
    keys: z.ZodString;
}, "strip", z.ZodTypeAny, {
    keys?: string;
}, {
    keys?: string;
}>;
export type GetCacheByKeyRequestDto = z.infer<typeof GetCacheByKeyRequestDto>;
