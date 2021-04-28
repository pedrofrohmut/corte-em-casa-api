import { DataTypes, Model, Optional } from "sequelize"

import sequelize from "../sequelize-instance"

interface UserAttributes {
  id?: string
  name: string
  email: string
  password?: string
  password_hash: string
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class UserModel
    extends Model<UserAttributes, UserCreationAttributes>
    implements UserAttributes {
  id?: string
  name!: string
  email!: string
  password?: string
  password_hash!: string
}

const attributes = {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.VIRTUAL,
  password_hash: DataTypes.STRING
}

const options = {
  underscored: true,
  timestamps: true,
  sequelize,
  tableName: "users"
}

UserModel.init(attributes, options)

export default UserModel
