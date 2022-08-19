import { Request, Response } from "express";
import { DogWalkBusiness } from "../business/DogWalkBusiness";
import { DogWalkDatabase } from "../data/DogWalkDatabase";
import { WalkInputDTO } from "../model/Walk"
import { InvalidTime,InvalidPet, InvalidData } from "../error/customError";

export class DogWalkController {

  public createWalk = async (req: Request, res: Response): Promise<void> => {
      try {
         if (req.body.pets < 1) {
            throw new InvalidPet();
          }

          if (!req.body.dataAgendamento || !req.body.duracao || !req.body.latitude || !req.body.longitude || !req.body.pets || !req.body.horaInicio || !req.body.horaTermino) {
            throw new InvalidData();
          }

          if (req.body.duracao != "00:30:00" && req.body.duracao != "01:00:00") {
            throw new InvalidTime()
          }

         const { dataAgendamento, duracao, latitude, longitude, pets, horaInicio, horaTermino } = req.body

         const input: WalkInputDTO = {
            dataAgendamento, 
            duracao, 
            latitude, 
            longitude, 
            pets, 
            horaInicio,
            horaTermino 
         }

         const dogWalkBusiness = new DogWalkBusiness
         dogWalkBusiness.createWalk(input)

         res.status(201).send({ message: "Passeio adicionado com sucesso!" })
      } catch (error:any) {
         res.status(400).send(error.sqlMessage || error.message)
      }
   }
   
   public showWalk = async (req: Request, res: Response) => {
      try {
       const input:any = {
           id: req.params.id,
       }

       const duracao = await new DogWalkBusiness().showWalking(input);

       res.send(duracao).status(200);
      } catch (error:any) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }
   
   public startWalk = async (req: Request, res: Response) => {
      try {
       const input:any = {
           id: req.params.id,
       }
        
       const inicio = await new DogWalkBusiness().startWalking(input);

       res.send(inicio).status(200);
      } catch (error:any) {
       res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }

   public finishWalk = async (req: Request, res: Response) => {
      try {
       const input:any = {
           id: req.params.id,
       }
         const termino = await new DogWalkBusiness().finishWalking(input);

         res.send(termino).status(200);
      } catch (error:any) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
     }
   }


   public allWalk = async (req: Request, res: Response) => {
      try {
         
         const data = await new DogWalkBusiness().allWalking()
         
         res.send(data).status(200);
      } catch (error:any) {
         res.send({ message: error.message }).status(error.sqlMessage || error.message);
      }
   }
}
