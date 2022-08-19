import express from "express";
import { DogWalkController } from "../controller/DogWalkController"

export const dogWalkRouter = express.Router();
const dogWalkController = new DogWalkController();

// dogWalkRouter.get('/', dogWalkController.allWalk)
dogWalkRouter.post('/create-walk', dogWalkController.createWalk)
dogWalkRouter.get('/show/:id', dogWalkController.showWalk)
dogWalkRouter.get('/start-walk/:id', dogWalkController.startWalk)
dogWalkRouter.get('/finish-walk/:id', dogWalkController.finishWalk)
dogWalkRouter.get('/data-walk/', dogWalkController.allWalk)