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
exports.DogWalkBusiness = void 0;
const GenerateId_1 = require("../services/GenerateId");
const DogWalkDatabase_1 = require("../data/DogWalkDatabase");
const Walk_1 = require("../model/Walk");
const generateId = new GenerateId_1.GenerateID();
class DogWalkBusiness {
    constructor() {
        this.createWalk = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { dataAgendamento, duracao, latitude, longitude, pets, horaInicio, horaTermino } = input;
                const calculosDosPasseios = (duracao, pets) => {
                    if (duracao === "00:30:00") {
                        if (pets >= 2) {
                            let quant = pets;
                            pets = pets * -15;
                            let preco = 25 * quant + pets;
                            return preco;
                        }
                        else {
                            let preco = 25 * pets;
                            return preco;
                        }
                    }
                    else if (duracao === "01:00:00") {
                        if (pets >= 2) {
                            let quant = pets;
                            pets = pets * -20;
                            let preco = 35 * quant + pets;
                            return preco;
                        }
                        else {
                            let preco = 35 * pets;
                            return preco;
                        }
                    }
                };
                const id = generateId.idGenerate();
                const Status = Walk_1.STATUS_TYPES.PENDENTE;
                const preco = calculosDosPasseios(input.duracao, input.pets);
                const dogWalkDatabase = new DogWalkDatabase_1.DogWalkDatabase();
                const walk = {
                    id,
                    Status,
                    dataAgendamento,
                    preco,
                    duracao,
                    latitude,
                    longitude,
                    pets,
                    horaInicio,
                    horaTermino
                };
                yield dogWalkDatabase.insertWalk({
                    id,
                    Status,
                    dataAgendamento,
                    preco,
                    duracao,
                    latitude,
                    longitude,
                    pets,
                    horaInicio,
                    horaTermino
                });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.showWalking = (walk) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield new DogWalkDatabase_1.DogWalkDatabase().showWalk(walk);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.startWalking = (walk) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield new DogWalkDatabase_1.DogWalkDatabase().startWalk(walk);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.finishWalking = (walk) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield new DogWalkDatabase_1.DogWalkDatabase().finishWalk(walk);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.allWalking = () => __awaiter(this, void 0, void 0, function* () {
            try {
                let walkDogDB = yield new DogWalkDatabase_1.DogWalkDatabase().allWalk();
                return walkDogDB;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.DogWalkBusiness = DogWalkBusiness;
