import asyncHandler from 'express-async-handler'
import {
  getNotificationService,
  getNotificationsService,
  createNotificationService,
} from '../services/notificationService.js'
import Group from '../models/groupModel.js'
import User from '../models/userModel.js'

// @desc    Fetch all notifications
// @route   GET /api/notifications
// @access  Public
const getNotifications = asyncHandler(async (req, res) => {
  const notifications = await getNotificationsService({})

  res.json(notifications)
})

// @desc    Fetch single notification
// @route   GET /api/notifications/:id
// @access  Public
const getNotificationById = asyncHandler(async (req, res) => {
  const notification = await getNotificationService(req.params.id)

  if (notification) {
    res.json(notification)
  } else {
    res.status(404)
    throw new Error('Notification not found')
  }
})

// @desc    Create a notification
// @route   POST /api/notifications
// @access  Private/Admin
const createNotification = asyncHandler(async (req, res) => {
  const createdNotification = await createNotificationService({
    title: req.body.title,
    user: req.user.id,
  })

  //send notification to all users and groups

  const NotifiedUsers = await User.updateMany(
    {},
    { notification: createdNotification._id }
  )
  const NotifiedGroups = await Group.updateMany(
    {},
    { notification: createdNotification._id }
  )
  if (NotifiedGroups && NotifiedUsers) {
    createdNotification.message = 'All users and groups havex notified!'
    res.status(201).json(createdNotification)
  } else {
    res.status(400)
    throw new Error('All users and groups have not notified!')
  }
})

export { createNotification, getNotifications, getNotificationById }
