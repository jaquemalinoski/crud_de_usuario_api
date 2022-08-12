import { request } from "express"
import jwt from "jsonwebtoken"

export const ValidTokenMiddleware = (req, res, next) => {
  
  let token = req.headers.authorization

  if (!token) {
    return res.status(401).json({message: 'Missing authorization headers'})
  }

  token = token.split(' ')[1]

  jwt.verify(token, '610a2ee688cda9e724885e23cd2cfdee', (error, decoded) => {
    if (error) {
      return res.status(401).json({message: 'Missing authorization headers'})
    }

    req.user = {
      id: decoded.sub,
      isAdm: decoded.isAdm
    }
    
    next()
    
  })
}