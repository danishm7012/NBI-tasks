import Notification from '../models/notificationModel.js'

const getNotificationService = async function (query) {
  try {
    var notification = await Notification.findOne(query)
    return notification
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating notifications')
  }
}

const getNotificationsService = async function (query) {
  try {
    var notifications = await Notification.find(query)
    return notifications
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating notifications')
  }
}
const createNotificationService = async function (query) {
  try {
    var notification = await Notification.create(query)
    return notification
  } catch (e) {
    // Log Errors
    throw Error('Error while Paginating notifications')
  }
}

export {
  getNotificationService,
  getNotificationsService,
  createNotificationService,
}
