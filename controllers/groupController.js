import asyncHandler from 'express-async-handler'
import {
  getGroupService,
  getGroupsService,
  createGroupService,
} from '../services/groupService.js'

// @desc    Fetch all groups
// @route   GET /api/groups
// @access  Public
const getGroups = asyncHandler(async (req, res) => {
  const groups = await getGroupsService({})

  res.json(groups)
})

// @desc    Fetch single group
// @route   GET /api/groups/:id
// @access  Public
const getGroupById = asyncHandler(async (req, res) => {
  const group = await getGroupService(req.params.id)

  if (group) {
    res.json(group)
  } else {
    res.status(404)
    throw new Error('group not found')
  }
})

// @desc    Create a group
// @route   POST /api/groups
// @access  Private/Admin
const createGroup = asyncHandler(async (req, res) => {
  const createdgroup = await createGroupService({
    name: req.body.name,
  })

  res.status(201).json(createdgroup)
})

export { createGroup, getGroups, getGroupById }
