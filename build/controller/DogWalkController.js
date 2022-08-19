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
exports.DogWalkController = void 0;
const DogWalkBusiness_1 = require("../business/DogWalkBusiness");
const customError_1 = require("../error/customError");
class DogWalkController {
    constructor() {
        this.createWalk = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (req.body.pets < 1) {
                    throw new customError_1.InvalidPet();
                }
                if (!req.body.dataAgendamento || !req.body.duracao || !req.body.latitude || !req.body.longitude || !req.body.pets || !req.body.horaInicio || !req.body.horaTermino) {
                    throw new customError_1.InvalidData();
                }
                if (req.body.duracao != "00:30:00" && req.body.duracao != "01:00:00") {
                    throw new customError_1.InvalidTime();
                }
                const { dataAgendamento, duracao, latitude, longitude, pets, horaInicio, horaTermino } = req.body;
                const input = {
                    dataAgendamento,
                    duracao,
                    latitude,
                    longitude,
                    pets,
                    horaInicio,
                    horaTermino
                };
                const dogWalkBusiness = new DogWalkBusiness_1.DogWalkBusiness;
                dogWalkBusiness.createWalk(input);
                res.status(201).send({ message: "Passeio adicionado com sucesso!" });
            }
            catch (error) {
                res.status(400).send(error.sqlMessage || error.message);
            }
        });
        this.showWalk = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id: req.params.id,
                };
                const duracao = yield new DogWalkBusiness_1.DogWalkBusiness().showWalking(input);
                res.send(duracao).status(200);
            }
            catch (error) {
                res.send({ message: error.message }).status(error.sqlMessage || error.message);
            }
        });
        this.startWalk = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id: req.params.id,
                };
                const inicio = yield new DogWalkBusiness_1.DogWalkBusiness().startWalking(input);
                res.send(inicio).status(200);
            }
            catch (error) {
                res.send({ message: error.message }).status(error.sqlMessage || error.message);
            }
        });
        this.finishWalk = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    id: req.params.id,
                };
                const termino = yield new DogWalkBusiness_1.DogWalkBusiness().finishWalking(input);
                res.send(termino).status(200);
            }
            catch (error) {
                res.send({ message: error.message }).status(error.sqlMessage || error.message);
            }
        });
        this.allWalk = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield new DogWalkBusiness_1.DogWalkBusiness().allWalking();
                res.send(data).status(200);
            }
            catch (error) {
                res.send({ message: error.message }).status(error.sqlMessage || error.message);
            }
        });
    }
}
exports.DogWalkController = DogWalkController;
