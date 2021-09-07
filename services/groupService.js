import Group from '../models/groupModel.js'

const getGroupService = async function (query) {
  try {
    var group = await Group.findOne(query)
    return group
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating groups')
  }
}

const getGroupsService = async function (query) {
  try {
    var groups = await Group.find(query)
    return groups
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating groups')
  }
}
const createGroupService = async function (query) {
  try {
    var group = await Group.create(query)
    return group
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating groups')
  }
}

export { getGroupService, getGroupsService, createGroupService }
