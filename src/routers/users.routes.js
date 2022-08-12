import { Router } from "express"
import { CreateUserController } from "../controllers/createUser.controller"
import { DeleteUserController } from "../controllers/deleteUser.controller"
import { ListUsersController } from "../controllers/listUsers.controller"
import { LoginUserController } from "../controllers/loginUser.controller"
import { ProfileUserController } from "../controllers/profileUser.controller"
import { UpdateUserController } from "../controllers/updateUser.controller"
import { EmailAlreadyInUseMiddleware } from "../middlewares/emailUsed.middleware"
import { IsAdminMiddleware } from "../middlewares/isAdmin.middleware"
import { ValidTokenMiddleware } from "../middlewares/validToken.middleware"

const route = Router()

route.post('/users', EmailAlreadyInUseMiddleware, CreateUserController)
route.post('/login', LoginUserController)
route.get('/users', ValidTokenMiddleware, IsAdminMiddleware, ListUsersController)
route.get('/users/profile', ValidTokenMiddleware, ProfileUserController)
route.patch('/users/:id', ValidTokenMiddleware, UpdateUserController)
route.delete('/users/:id', ValidTokenMiddleware, DeleteUserController)

export default route
