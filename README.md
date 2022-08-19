## API Dog Hero

<br>

**Recentemente lançamos um serviço novo de passeios, e ele tem como objetivo: Agendar Passeios de pets, consultar próximos passeios, o horario de inicio e fim, o preço é calculado automaticamente podendo receber descontos conforme a quantidade de pets.**

<br>

## Tecnologias Utilizadas

 1. Typescript
 2. Node.js
 5. Express
 6. Uuid
 8. Dotenv
 9. Mysql

<br>

 ## Tabelas Criadas

```sql
CREATE TABLE IF NOT EXISTS Dog_Walking  (
  id VARCHAR(255) PRIMARY KEY,
  status VARCHAR(255) NOT NULL,
  data_agendamento DATE NOT NULL,
  preco DOUBLE NOT NULL,
  duracao TIME NOT NULL,
  latitude DOUBLE NOT NULL,
  longitude DOUBLE NOT NULL,
  pets VARCHAR(255) NOT NULL,
  hora_inicio TIME NOT NULL,
  hora_termino TIME NOT	NULL
);
```