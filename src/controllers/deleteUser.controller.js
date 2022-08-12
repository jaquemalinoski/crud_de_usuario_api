import { Users } from "../database"
import { DeleteUserService } from "../services/deleteUser.service"

export const DeleteUserController = (req, res) => {
  const idUser = req.user.id
  const idtoDelete = req.params.id
  const isAdm = req.user.isAdm
  
  const message = DeleteUserService(isAdm, idUser, idtoDelete)

  return res.status(201).json({'message': message}) 
}