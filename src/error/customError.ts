export abstract class BaseError extends Error {
  constructor(message: string, public code: number) {
    super(message);
  }
}

export class CustomError extends Error {
  constructor(statusCode: number, message: string){
    super(message)
  }
}

export class InvalidData extends CustomError{ 
    constructor(){
      super(400,  'Os campos "data do agendamento" | "tempo de de duração" | "inicio" | "fim" | "quantidade de pets" | "latitude" | "longitude" devem ser preenchidos ')
    }
  }

export class InvalidPet extends CustomError{ 
  constructor(){
    super(400, "A quantidade deve ser maior que zero")
  }
}

export class InvalidTime extends CustomError{ 
  constructor(){
    super(400, "'Permitido apenas durações de 00:30:00 ou 01:00:00 '")
  }
}
