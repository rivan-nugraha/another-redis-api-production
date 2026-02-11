import * as z from 'zod';
export declare const GetAllKeysRequestDto: z.ZodObject<{
    selected_db: z.ZodString;
}, "strip", z.ZodTypeAny, {
    selected_db?: string;
}, {
    selected_db?: string;
}>;
export type GetAllKeysRequestDto = z.infer<typeof GetAllKeysRequestDto>;
