import { walk } from "../model/Walk";
import { BaseDatabase } from "./BaseDatabase";

export class DogWalkDatabase extends BaseDatabase {
   private static TABLE_NAME = "Dog_Walking";
   
   public insertWalk = async(walk: walk) => {
      try {
        await this.getConnection()
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

      } catch (error:any) {
         throw new Error(error.sqlMessage || error.message)
      }
   }


   public showWalk = async(walk: walk) => {
     try {

      const result = await this.getConnection()
         .select("duracao")
         .where({ id: walk.id })
         .from(DogWalkDatabase.TABLE_NAME);

      return result;

      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
  }


  public startWalk = async(walk: walk) => {
    try {

     const result = await this.getConnection()
         .select("hora_inicio")
         .where({ id: walk.id })
         .from(DogWalkDatabase.TABLE_NAME);

     return result;

   } catch (error:any) {
     throw new Error(error.sqlMessage || error.message);
   }
}


public finishWalk = async(walk: walk) => {
  try {

     const result = await this.getConnection()
         .select("hora_termino")
         .where({ id: walk.id })
         .from(DogWalkDatabase.TABLE_NAME);

     return result;

   } catch (error:any) {
     throw new Error(error.sqlMessage || error.message);
   }
  }


public allWalk = async() => {
  try {

    const result = await this.getConnection()
    .select("*")
    .from(DogWalkDatabase.TABLE_NAME);

    return result;
    
  } catch (error:any) {
    throw new Error(error.sqlMessage || error.message);
  }
}
}