import { Users } from "../database"

export const DeleteUserService = (isAdm, idUser, idtoDelete) => { 

  const userIndexToDelete = Users.findIndex(user => user.id === idtoDelete)

  if (!isAdm && idtoDelete !== idUser) {
    return 'Missing admin permissions'
  }

  if (userIndexToDelete === -1) {
    return 'User not found'
  }

  Users.splice(userIndexToDelete, 1)

  return 'User deleted with success'
}
