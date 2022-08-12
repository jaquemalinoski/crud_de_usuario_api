import { ListUsersService } from "../services/listUsers.service"

export const ListUsersController = (req, res) => {
  return res.status(200).json(ListUsersService())
}