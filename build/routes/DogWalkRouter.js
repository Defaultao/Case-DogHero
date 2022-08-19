"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dogWalkRouter = void 0;
const express_1 = __importDefault(require("express"));
const DogWalkController_1 = require("../controller/DogWalkController");
exports.dogWalkRouter = express_1.default.Router();
const dogWalkController = new DogWalkController_1.DogWalkController();
exports.dogWalkRouter.post('/create-walk', dogWalkController.createWalk);
exports.dogWalkRouter.get('/show/:id', dogWalkController.showWalk);
exports.dogWalkRouter.get('/start-walk/:id', dogWalkController.startWalk);
exports.dogWalkRouter.get('/finish-walk/:id', dogWalkController.finishWalk);
exports.dogWalkRouter.get('/data-walk/', dogWalkController.allWalk);
