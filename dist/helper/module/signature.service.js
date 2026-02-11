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
exports.SignatureService = void 0;
const common_1 = require("@nestjs/common");
const crypto_js_1 = require("crypto-js");
const env_service_1 = require("../../infra/config/env.service");
let SignatureService = class SignatureService {
    constructor(envService) {
        this.envService = envService;
    }
    computeSignature(apiKey, secretKey, accessToken, timestamp) {
        const payload = apiKey + secretKey + accessToken + timestamp;
        return (0, crypto_js_1.SHA256)(payload).toString();
    }
    validateSignature(signature, timestamp, accessToken, tolerance) {
        const headerDate = new Date(timestamp);
        const currentDate = new Date();
        const diffDateSecond = (currentDate.getTime() - headerDate.getTime()) / 1000;
        if (diffDateSecond < -tolerance || diffDateSecond > tolerance) {
            return false;
        }
        const envVariables = this.envService.variables;
        const expectedSignature = this.computeSignature(envVariables.apiKey, envVariables.secretKey, accessToken, timestamp);
        return signature === expectedSignature;
    }
};
exports.SignatureService = SignatureService;
exports.SignatureService = SignatureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [env_service_1.EnvService])
], SignatureService);
//# sourceMappingURL=signature.service.js.map