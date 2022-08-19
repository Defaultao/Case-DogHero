"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateID = void 0;
const uuid_1 = require("uuid");
class GenerateID {
    idGenerate() {
        return (0, uuid_1.v4)();
    }
}
exports.GenerateID = GenerateID;
