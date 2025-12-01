import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    userType: { type: DataTypes.INTEGER, allowNull: false}
});

export default User;