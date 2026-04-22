"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsStringNumber = IsStringNumber;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
function IsStringNumber() {
    const decorators = [(0, class_validator_1.Matches)(/^\d+$/), (0, class_validator_1.IsOptional)()];
    return (0, common_1.applyDecorators)(...decorators);
}
//# sourceMappingURL=optional-string-number.decorator.js.map