import jwt from 'jsonwebtoken'

export const IsAdminMiddleware = (req, res, next) => {

  if (!req.user.isAdm) {

    return res.status(401).json({message: 'Unauthorized'})

  }
      
  next()
}