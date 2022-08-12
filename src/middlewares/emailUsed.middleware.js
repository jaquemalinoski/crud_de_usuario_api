import { Users } from "../database"

export const EmailAlreadyInUseMiddleware = (req, res, next) => {
  const { email } = req.body

  const emailUsed = Users.find(user => user.email === email)

  if (emailUsed) {
    return res.status(400).json({message: 'Email already in use'})
  }

  next()
}