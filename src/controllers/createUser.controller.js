import { CreateUserService } from "../services/createUser.service"

export const CreateUserController = async (req, res) => {
  const { name, email, password, isAdm} = req.body

  const user = await CreateUserService(name, email, password, isAdm)

  return res.status(201).json(user)
}