/*
Db: examenbd
*/

CREATE TABLE Usuario(
    UsuarioId INTEGER NOT NULL AUTO_INCREMENT,
    NickName VARCHAR(50) UNIQUE,
    Password VARCHAR(50),
    FechaRegistro DATETIME DEFAULT CURDATE(),
    PRIMARY KEY (UsuarioId)
);

CREATE TABLE Categoria(
    CategoriaId INTEGER NOT NULL AUTO_INCREMENT,
    NombreCategoria VARCHAR(50) UNIQUE,
    Active BOOLEAN DEFAULT TRUE,
    PRIMARY KEY(CategoriaId)
);
CREATE TABLE Examen(
    ExamenId INTEGER NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(50) UNIQUE,
    Notas VARCHAR(400),
    CategoriaId INTEGER,
    PRIMARY KEY(ExamenId)
);
CREATE TABLE Pregunta(
    PreguntaId INTEGER NOT NULL AUTO_INCREMENT,
    ExamenId INTEGER,
    TextoPregunta VARCHAR(100),
    R1 VARCHAR(100),
    R2 VARCHAR(100),
    R3 VARCHAR(100),
    RespuestaCorrecta VARCHAR(2),
    PRIMARY KEY(PreguntaId),
    FOREIGN KEY (ExamenId) REFERENCES Examen(ExamenId)
);
CREATE TABLE Contacto(
    ContactoId INTEGER NOT NULL AUTO_INCREMENT,
    Celular VARCHAR(10),
    NombreCompleto VARCHAR(70),
    Mensaje VARCHAR(700),
    Email VARCHAR(50),
    Escuela VARCHAR(100),
    FechaRegistro DATETIME DEFAULT CURDATE(),
    PRIMARY KEY(ContactoId)
);
CREATE TABLE Estudiante(
    EstudianteId INTEGER NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Apellidos VARCHAR(100),
    FechaRegistro DATETIME DEFAULT CURDATE(),
    UsuarioId INTEGER,
    Celular VARCHAR(10),
    PRIMARY KEY(EstudianteId),
    FOREIGN KEY (UsuarioId) REFERENCES Usuario(UsuarioId)
);
CREATE TABLE ExamenEstudiante(
    ExamenEstudianteId INTEGER NOT NULL AUTO_INCREMENT,
    ExamenId INTEGER,
    EstudianteId INTEGER,
    Calificacion INTEGER,
    FechaRegistro DATETIME DEFAULT CURDATE(),
    Observaciones VARCHAR(400),
    PRIMARY KEY(ExamenEstudianteId),
    FOREIGN KEY (ExamenId) REFERENCES Examen(ExamenId),
    FOREIGN KEY (EstudianteId) REFERENCES Estudiante(EstudianteId)
);

CREATE TABLE Version(
    VersionId INTEGER NOT NULL AUTO_INCREMENT,
    Version VARCHAR(50),
    PRIMARY KEY(VersionId)
);

CREATE TABLE Materia(
    MateriaId INTEGER NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(50),
    PRIMARY KEY(MateriaId)
);
CREATE TABLE TipoActividad(
    TipoActividadId INTEGER NOT NULL AUTO_INCREMENT,
    NombreTipo VARCHAR(50),
    PRIMARY KEY(TipoActividadId)
);
CREATE TABLE Actividad(
    ActividadId INTEGER NOT NULL AUTO_INCREMENT,
    MateriaId INTEGER,
    TipoActividadId INTEGER,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(50),
    FechaEntrega DATE DEFAULT CURDATE(),
    FOREIGN KEY (MateriaId) REFERENCES Materia(MateriaId),
    FOREIGN KEY (TipoActividadId ) REFERENCES TipoActividad(TipoActividadId),
    PRIMARY KEY (ActividadId)
);
CREATE TABLE EstudianteActividad(
    EstudianteActividadId INTEGER NOT NULL AUTO_INCREMENT,
    EstudianteId INTEGER,
    ActividadId INTEGER,
    Calificacion VARCHAR(50),
    MateriaId INTEGER,
    FOREIGN KEY (EstudianteId) REFERENCES Estudiante(EstudianteId),
    FOREIGN KEY (MateriaId) REFERENCES Materia(MateriaId),
    FOREIGN KEY (ActividadId) REFERENCES Actividad(ActividadId),
    PRIMARY KEY (EstudianteActividadId)
);
CREATE TABLE MateriaEstudiante(
    MateriaEstudianteId INTEGER NOT NULL AUTO_INCREMENT,
    MateriaId INTEGER,
    EstudianteId INTEGER,
    Calificacion VARCHAR(50),
    FOREIGN KEY (MateriaId) REFERENCES Materia(MateriaId),
    FOREIGN KEY (EstudianteId) REFERENCES Estudiante(EstudianteId),
    PRIMARY KEY (MateriaEstudianteId)
);

INSERT INTO Version(Version) VALUES('0.0');