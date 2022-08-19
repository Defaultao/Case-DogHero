"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogWalkDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class DogWalkDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.insertWalk = (walk) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    id: walk.id,
                    status: walk.Status,
                    data_agendamento: walk.dataAgendamento,
                    preco: walk.preco,
                    duracao: walk.duracao,
                    latitude: walk.latitude,
                    longitude: walk.longitude,
                    pets: walk.pets,
                    hora_inicio: walk.horaInicio,
                    hora_termino: walk.horaTermino
                }).into(DogWalkDatabase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.showWalk = (walk) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("duracao")
                    .where({ id: walk.id })
                    .from(DogWalkDatabase.TABLE_NAME);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.startWalk = (walk) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("hora_inicio")
                    .where({ id: walk.id })
                    .from(DogWalkDatabase.TABLE_NAME);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.finishWalk = (walk) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("hora_termino")
                    .where({ id: walk.id })
                    .from(DogWalkDatabase.TABLE_NAME);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.allWalk = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("*")
                    .from(DogWalkDatabase.TABLE_NAME);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.DogWalkDatabase = DogWalkDatabase;
DogWalkDatabase.TABLE_NAME = "Dog_Walking";
