"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidTime = exports.InvalidPet = exports.InvalidData = exports.CustomError = exports.BaseError = void 0;
class BaseError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
}
exports.BaseError = BaseError;
class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
    }
}
exports.CustomError = CustomError;
class InvalidData extends CustomError {
    constructor() {
        super(400, 'Os campos "data do agendamento" | "tempo de de duração" | "inicio" | "fim" | "quantidade de pets" | "latitude" | "longitude" devem ser preenchidos ');
    }
}
exports.InvalidData = InvalidData;
class InvalidPet extends CustomError {
    constructor() {
        super(400, "A quantidade deve ser maior que zero");
    }
}
exports.InvalidPet = InvalidPet;
class InvalidTime extends CustomError {
    constructor() {
        super(400, "'Permitido apenas durações de 00:30:00 ou 01:00:00 '");
    }
}
exports.InvalidTime = InvalidTime;
