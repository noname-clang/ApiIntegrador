import conn from "../config/conn.js";
import { DataTypes } from "sequelize";





export const Users = conn.define(
  "users",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    email: { type: DataTypes.STRING, allowNull: false, required: true },
    hospedagem: { type: DataTypes.STRING, allowNull: false, required: true },
    cpf: { type: DataTypes.STRING, allowNull: false, required: true },
    valor: { type: DataTypes.FLOAT, allowNull: false, required: true },
    checkin: { type: DataTypes.DATE, allowNull: false, required: true },
    checkout: { type: DataTypes.DATE, allowNull: false, required: true },
  },
  { 
    tableName: "users",
  }
);

