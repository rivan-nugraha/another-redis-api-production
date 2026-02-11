"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseDto = void 0;
class ResponseDto {
    constructor({ status, data, message = '', count = 0 }) {
        this.status = status;
        this.data = data;
        this.message = message;
        this.count = count;
    }
}
exports.ResponseDto = ResponseDto;
//# sourceMappingURL=response.dto.base.js.map