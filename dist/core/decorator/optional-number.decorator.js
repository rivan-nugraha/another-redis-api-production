"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOptionalNumber = IsOptionalNumber;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
function IsOptionalNumber() {
    const decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsOptional)()];
    return (0, common_1.applyDecorators)(...decorators);
}
//# sourceMappingURL=optional-number.decorator.js.map