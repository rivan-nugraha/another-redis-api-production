import * as z from 'zod';
export declare const GetAllKeysRequestDto: z.ZodObject<{
    selected_db: z.ZodString;
    server: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    server?: string;
    selected_db?: string;
}, {
    server?: string;
    selected_db?: string;
}>;
export type GetAllKeysRequestDto = z.infer<typeof GetAllKeysRequestDto>;
