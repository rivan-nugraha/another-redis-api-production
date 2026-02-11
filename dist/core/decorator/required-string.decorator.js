"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsRequiredString = IsRequiredString;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
function IsRequiredString(options = {}) {
    const { uppercase = false } = options;
    const decorators = [(0, class_validator_1.IsString)({ each: true }), (0, class_validator_1.IsNotEmpty)()];
    if (uppercase)
        decorators.push((0, class_transformer_1.Transform)(({ value }) => typeof value === 'string' ? String(value).toUpperCase() : value));
    if (options.isArray) {
        decorators.unshift((0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayMinSize)(1));
    }
    return (0, common_1.applyDecorators)(...decorators);
}
//# sourceMappingURL=required-string.decorator.js.map