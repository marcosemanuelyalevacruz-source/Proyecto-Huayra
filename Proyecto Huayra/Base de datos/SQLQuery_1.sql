-- create table usuariosRegistrados (
--   id INT IDENTITY(1,1) primary key,
--   nombre varchar(30) not null,
--   email varchar(50) unique not null,
--   contasenia varchar(25),
--   rango BIT  default 1
-- );

CREATE TABLE escuelasregistradas (
  id INT IDENTITY(1,1) PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  tipoDeInstitución VARCHAR(30) NOT NULL,
  nivel VARCHAR(30) NOT NULL,
  modalidad VARCHAR(50) NOT NULL,
  director VARCHAR(100) NOT NULL,
  fechaDeFundacion DATE NOT NULL,
  turno VARCHAR(50) NOT NULL,
  aniosACursar varchar(10)  NOT NULL,
  capacidadDeAlumnos INT NOT NULL,
  provincia VARCHAR(100) NOT NULL,
  localidad VARCHAR(100) NOT NULL,
  direccion VARCHAR(150) NOT NULL,
  cantDeCompPorEntregar INT NOT NULL,
  computadorasEntregadas INT NOT NULL,
  anioAlCualFueEntrgado VARCHAR(10) NOT NULL,
  computadorasRestantes INT NOT NULL,
  inconvenientes VARCHAR(MAX) NOT NULL
);


DROP TABLE escuelasregistradas
