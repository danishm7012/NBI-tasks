import User from '../models/userModel.js'

const getProfile = async function (query) {
  try {
    var user = await User.findOne(query)
    return user
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating Users')
  }
}

const getProfiles = async function (query) {
  try {
    var users = await User.find(query)
    return users
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating Users')
  }
}
const createUser = async function (query) {
  try {
    var user = await User.create(query)
    return user
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating Users')
  }
}

export { getProfile, getProfiles, createUser }
