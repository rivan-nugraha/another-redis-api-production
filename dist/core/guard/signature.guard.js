"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureGuard = void 0;
const common_1 = require("@nestjs/common");
const signature_service_1 = require("../../helper/module/signature.service");
const core_1 = require("@nestjs/core");
const public_decorator_1 = require("../decorator/public.decorator");
let SignatureGuard = class SignatureGuard {
    constructor(signatureService, reflector) {
        this.signatureService = signatureService;
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic)
            return true;
        const req = context.switchToHttp().getRequest();
        const signature = req.headers.signature || req.query['signature'];
        const timestamp = req.headers.timestamp || req.query['timestamp'];
        const accessToken = req.headers.authorization ||
            req.query['authorization'] ||
            '';
        const isValidSignature = this.signatureService.validateSignature(signature, timestamp, accessToken.slice('bearer '.length), 60);
        if (!isValidSignature) {
            throw new common_1.UnauthorizedException('Invalid Signature.');
        }
        return true;
    }
};
exports.SignatureGuard = SignatureGuard;
exports.SignatureGuard = SignatureGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [signature_service_1.SignatureService,
        core_1.Reflector])
], SignatureGuard);
//# sourceMappingURL=signature.guard.js.map