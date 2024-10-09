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
    senha: { type: DataTypes.STRING, allowNull: false, required: true },
    papel: { type: DataTypes.STRING, allowNull: false, required: true },
  },
  {
    tableName: "users",
  }
);

