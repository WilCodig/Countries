const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {

    ID: {
      type: DataTypes.STRING, //!solo 3 caracteres 
      primaryKey: true,
      allowNull: false, //!es obligatorio
      //defaultValue: DataTypes.UUIDV4, //si alguna de los paises no tiene id
      //unique: true,
    },

    Nombre: {
      type: DataTypes.STRING,
      allowNull: false, //!es obligatorio
    },

    Imagen: {
      type: DataTypes.STRING,
      allowNull: false, //!es obligatorio
    },

    Continente:{
      type: DataTypes.STRING,
      allowNull: false, //!es obligatorio
    },

    Capital: {
      type: DataTypes.STRING,
      allowNull: false, //!es obligatorio
    },

    Subregion: {
      type: DataTypes.STRING
    },

    Area: {
      type: DataTypes.INTEGER //integer
    },

    Poblacion: {
      type: DataTypes.INTEGER,
      allowNull: false, //!es obligatorio
    }, 
  },{timestamps: false});
};


//MODELO 1 | Country

// ID (Código de tres letras). *
// Nombre. *
// Imagen de la bandera. *
// Continente. *
// Capital. *
// Subregión.
// Área.
// Población. *
