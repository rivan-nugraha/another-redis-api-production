"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsOptionalSortBy = IsOptionalSortBy;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
function IsOptionalSortBy() {
    const decorators = [(0, class_validator_1.IsOptional)()];
    decorators.push((0, class_transformer_1.Transform)(({ value }) => {
        if (typeof value == 'object') {
            const isValid = Object.keys(value)
                .map((key) => value[key])
                .every((val) => val === 'asc' || val === 'desc');
            if (!isValid)
                throw new common_1.BadRequestException('Sort By is not valid.');
            return value;
        }
    }));
    return (0, common_1.applyDecorators)(...decorators);
}
//# sourceMappingURL=optional-sort-by.decorated.js.map