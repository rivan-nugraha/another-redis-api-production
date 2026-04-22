"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOptionalString = IsOptionalString;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
function IsOptionalString(options = {}) {
    const { uppercase = false } = options;
    const decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
    if (uppercase)
        decorators.push((0, class_transformer_1.Transform)(({ value }) => typeof value === 'string' ? String(value).toUpperCase() : value));
    return (0, common_1.applyDecorators)(...decorators);
}
//# sourceMappingURL=optional-string.decorator.js.map