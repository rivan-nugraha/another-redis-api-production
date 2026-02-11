"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceModule = void 0;
const common_1 = require("@nestjs/common");
const resource_provider_1 = require("./resource.provider");
const signature_guard_1 = require("../core/guard/signature.guard");
const core_1 = require("@nestjs/core");
const resource_controller_1 = require("./resource.controller");
let ResourceModule = class ResourceModule {
};
exports.ResourceModule = ResourceModule;
exports.ResourceModule = ResourceModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: signature_guard_1.SignatureGuard,
            },
        ],
        imports: resource_provider_1.resourceProviders,
        exports: resource_provider_1.resourceProviders,
        controllers: [resource_controller_1.ResourceController],
    })
], ResourceModule);
//# sourceMappingURL=resource.module.js.map