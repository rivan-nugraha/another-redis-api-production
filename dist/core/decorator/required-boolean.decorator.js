"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsRequiredBoolean = IsRequiredBoolean;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
function IsRequiredBoolean() {
    const decorators = [(0, class_validator_1.IsBoolean)(), (0, class_validator_1.IsNotEmpty)()];
    return (0, common_1.applyDecorators)(...decorators);
}
//# sourceMappingURL=required-boolean.decorator.js.map