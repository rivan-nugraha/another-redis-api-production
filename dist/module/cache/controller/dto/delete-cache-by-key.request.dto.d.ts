import * as z from 'zod';
export declare const DeleteCacheByKeyRequestDto: z.ZodObject<{
    key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    key?: string;
}, {
    key?: string;
}>;
export type DeleteCacheByKeyRequestDto = z.infer<typeof DeleteCacheByKeyRequestDto>;
