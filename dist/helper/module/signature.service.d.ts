import { EnvService } from '../../infra/config/env.service';
export declare class SignatureService {
    readonly envService: EnvService;
    constructor(envService: EnvService);
    computeSignature(apiKey: string, secretKey: string, accessToken: string, timestamp: string): string;
    validateSignature(signature: string, timestamp: string, accessToken: string, tolerance: number): boolean;
}
