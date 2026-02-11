"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsRequiredMixed = IsRequiredMixed;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
function IsRequiredMixed(options) {
    const decorators = [
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_transformer_1.Type)(() => options.type),
        (0, class_validator_1.ValidateNested)({ each: true }),
    ];
    if (options.isArray) {
        decorators.unshift((0, class_validator_1.IsArray)(), (0, class_validator_1.ArrayMinSize)(1));
    }
    return (0, common_1.applyDecorators)(...decorators);
}
//# sourceMappingURL=required-mixed.decorator.js.map