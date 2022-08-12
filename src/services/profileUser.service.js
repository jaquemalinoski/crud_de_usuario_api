import { Users } from "../database"
import jwt from 'jsonwebtoken'

export const ProfileUserService = (token) => {
  
  const profile = jwt.verify(token, '610a2ee688cda9e724885e23cd2cfdee', (error, decoded) => {
    let user = Users.find(user => user.id === decoded.sub)

    return user
  })

  return profile
}