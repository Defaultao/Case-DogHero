import { app } from "./App";
import { dogWalkRouter } from "./routes/DogWalkRouter";

app.use("/dog-hero", dogWalkRouter)