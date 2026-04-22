"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateColor = generateColor;
exports.generateTagLevel = generateTagLevel;
const color_const_1 = require("../../core/constant/logger/color.const");
const clc = require("cli-color");
function generateColor(level) {
    switch (level) {
        case 'info':
            return color_const_1.ColorLevel['info'];
        case 'warn':
            return color_const_1.ColorLevel['warn'];
        case 'error':
            return color_const_1.ColorLevel['error'];
        case 'debug':
            return color_const_1.ColorLevel['debug'];
        case 'verbose':
            return color_const_1.ColorLevel['verbose'];
        default:
            return 0;
    }
}
function generateTagLevel(level, color) {
    return clc.xterm(color).white.bold(` ${level.toUpperCase()} `);
}
//# sourceMappingURL=generator.function.js.map