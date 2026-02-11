"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsRequiredNumber = IsRequiredNumber;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
function IsRequiredNumber() {
    const decorators = [(0, class_validator_1.IsNumber)(), (0, class_validator_1.IsNotEmpty)()];
    return (0, common_1.applyDecorators)(...decorators);
}
//# sourceMappingURL=required-number.decorator.js.map