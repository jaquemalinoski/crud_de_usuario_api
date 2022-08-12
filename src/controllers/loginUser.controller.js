import { loginUserService } from "../services/loginUser.service"

export const LoginUserController = async (req, res) => {
  const { email, password } = req.body

  try {
    const token = await loginUserService(email, password)
    return res.status(200).json({token})

  } catch (err) {
    return res.status(401).json({message: err.message}) 
  }
}