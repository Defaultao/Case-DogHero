import { v4 } from "uuid";

export class GenerateID{

    idGenerate(): string{
        return v4();
    }
}