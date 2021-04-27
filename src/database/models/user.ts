import { DataTypes } from "sequelize"

import sequelize from "../sequelize-instance"

const UserModel = sequelize.define(
  "user",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.VIRTUAL,
    password_hash: DataTypes.STRING
  },
  {
    // hooks: {
    //   beforeValidate: async (user, options) => {
    //     if (user.password) {
    //       user.password_hash = await bcrypt.hash(user.password, 8)
    //     }
    //   }
    // },
    underscored: true,
    timestamps: true
  }
)

export default UserModel
