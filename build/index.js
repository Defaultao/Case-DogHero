"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const DogWalkRouter_1 = require("./routes/DogWalkRouter");
App_1.app.use("/dog-hero", DogWalkRouter_1.dogWalkRouter);
