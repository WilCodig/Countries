const {DataTypes}= require("sequelize");

module.exports= (sequelize) =>{
    sequelize.define("activity",{
        ID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: true, //! obligatorio
            autoIncrement: true
        },

        Nombre: {
            type: DataTypes.STRING,
            allowNull: true, //! obligatorio
            //unique: true
        },

        Dificultad: {
            //type: DataTypes.ENUM("1","2","3","4","5"), //opcion 1
            type: DataTypes.INTEGER,
            allowNull: true //! obligatorio
        },

        Duracion: {
            type: DataTypes.STRING //va en HS, type: DataTypes.ENUM('1',...., '24') hs //opcion 1
            //type: DataTypes.INTEGER,
        },

        Temporada: {
            type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
            allowNull: true //! obligatorio
        }

    },{timestamps: false});
}

// MODELO 2 | Activity

// ID. *
// Nombre. *
// Dificultad (número del 1 al 5). *
// Duración (en horas).
// Temporada (Verano, Otoño, Invierno o Primavera). *