import { Users } from "../database"

export const UpdateUserService = (idUser, idToUpdate, isAdm, name, email, password) => {

  const userIndex = Users.findIndex(user => user.id === idToUpdate)

  if (!isAdm && idUser !== idToUpdate) {
    throw new Error ('Missing admin permissions')
  }
  
  if (userIndex === -1) {
    throw new Error ('User not found')
  }

  const updatedDate = new Date()
  const updatedUser = {name, email, password, updatedOn: updatedDate}

  Users[userIndex] = {...Users[userIndex], ...updatedUser}

  return Users[userIndex]
}