import { CanActivate, ExecutionContext } from '@nestjs/common';
import { SignatureService } from '../../helper/module/signature.service';
import { Reflector } from '@nestjs/core';
export declare class SignatureGuard implements CanActivate {
    private signatureService;
    private reflector;
    constructor(signatureService: SignatureService, reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
}
