import express from 'express'
import dotenv from 'dotenv'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import userRoutes from './routes/userRoutes.js'
import groupRoutes from './routes/groupRoutes.js'
import notificationRoutes from './routes/notificationRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/groups', groupRoutes)
app.use('/api/notifications', notificationRoutes)

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)