"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOptionalBoolean = IsOptionalBoolean;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
function IsOptionalBoolean() {
    const decorators = [(0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsOptional)()];
    return (0, common_1.applyDecorators)(...decorators);
}
//# sourceMappingURL=optional-boolean.decorator.js.map