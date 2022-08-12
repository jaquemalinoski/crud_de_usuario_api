import { ProfileUserService } from "../services/profileUser.service"

export const ProfileUserController = (req, res) => {
  let token = req.headers.authorization

  token = token.split(' ')[1]

  const profile = ProfileUserService( token )

  return res.status(200).json(profile)
} 