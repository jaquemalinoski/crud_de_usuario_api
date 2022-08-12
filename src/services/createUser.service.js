import { Users } from "../database"
import { v4 as uuidv4 } from "uuid"
import * as bcrypt from "bcryptjs"

export const CreateUserService = async (name, email, password, isAdm) => {

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = {
    id: uuidv4(),
    name: name,
    email: email,
    password: hashedPassword,
    isAdm: isAdm,
    createdOn: new Date(),
    updatedOn: new Date()
  }

  Users.push(user)

  const response = {...user}
  delete response.password

  return response
}