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



SELECT * FROM Dog_Walking
WHERE data_agendamento = "2022-08-16"