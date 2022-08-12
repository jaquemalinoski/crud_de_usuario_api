import jwt from "jsonwebtoken"
import { Users } from "../database"
import * as bcrypt from "bcryptjs"

export const loginUserService = async (email, password) => {
  
  const user = Users.find(user => user.email === email)
  
  if (!user) {
    throw new Error ('Wrong email/password')
  } 

  const passwordMatchs = await bcrypt.compare(password, user.password)

  if (!passwordMatchs) {
    throw new Error ('Wrong email/password')
  }

  const token = jwt.sign({isAdm: user.isAdm}, '610a2ee688cda9e724885e23cd2cfdee', {expiresIn: '24h', subject: user.id})

  return token
}