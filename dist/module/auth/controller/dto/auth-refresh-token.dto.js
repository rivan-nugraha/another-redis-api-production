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
exports.AuthRefreshTokenRequestDto = void 0;
const required_string_decorator_1 = require("../../../../core/decorator/required-string.decorator");
class AuthRefreshTokenRequestDto {
}
exports.AuthRefreshTokenRequestDto = AuthRefreshTokenRequestDto;
__decorate([
    (0, required_string_decorator_1.IsRequiredString)(),
    __metadata("design:type", String)
], AuthRefreshTokenRequestDto.prototype, "user_id", void 0);
__decorate([
    (0, required_string_decorator_1.IsRequiredString)(),
    __metadata("design:type", String)
], AuthRefreshTokenRequestDto.prototype, "refresh_token", void 0);
//# sourceMappingURL=auth-refresh-token.dto.js.map