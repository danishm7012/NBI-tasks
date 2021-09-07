import mongoose from 'mongoose'

const groupSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    notification: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Notification',
    },
  },
  {
    timestamps: true,
  }
)

const Group = mongoose.model('Group', groupSchema)

export default Group
