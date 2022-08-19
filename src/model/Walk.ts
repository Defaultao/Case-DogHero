export enum STATUS_TYPES {
   PENDENTE = "Pendente",
   PROGRESSO = "Em progresso",
   CONCLUIDO = "Concluido",
}

export type walk = {
    id: string,
    Status:STATUS_TYPES.PENDENTE,
    dataAgendamento: Date,
    preco: number,
    duracao:string,
    latitude:number,
    longitude:number,
    pets:number,
    horaInicio:string,
    horaTermino:string
 }

 export interface WalkInputDTO  {
    dataAgendamento: Date,
    duracao:string,
    latitude:number,
    longitude:number,
    pets:number,
    horaInicio:string,
    horaTermino:string
 }

