import { Users } from "../database"
import { UpdateUserService } from "../services/updateUser.service"

export const UpdateUserController = (req, res) => {
  const idUser = req.user.id
  const idToUpdate = req.params.id
  const isAdm = req.user.isAdm

  const { name, email, password } = req.body  

  try {

    const updatedUser = UpdateUserService(idUser, idToUpdate, isAdm, name, email, password)
    return res.status(200).json(updatedUser)

  } catch (err) {

    return res.status(400).json({ message: err.message })

  }
}