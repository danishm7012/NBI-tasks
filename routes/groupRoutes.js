import express from 'express'
const router = express.Router()
import {
  createGroup,
  getGroups,
  getGroupById,
} from '../controllers/groupController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(createGroup).get(protect, getGroups)

router.route('/:id').get(protect, getGroupById)

export default router
