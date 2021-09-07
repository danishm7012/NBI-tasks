import express from 'express'
const router = express.Router()
import {
  createNotification,
  getNotifications,
  getNotificationById,
} from '../controllers/notificationController.js'
import { protect } from '../middleware/authMiddleware.js'

router
  .route('/')
  .post(protect, createNotification)
  .get(protect, getNotifications)

router.route('/:id').get(protect, getNotificationById)

export default router
