import mongoose from 'mongoose'
import { config } from '../../config/config.js'

const subscriptionCollection = 'subscriptions'

mongoose.set('strictQuery', true)

export const subcriptionSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      default: 'active',
      required: true
    },
    email: {
      type: String,
      required: true
    },
    mentoryId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export const SubscriptionModel = mongoose.model(
  subscriptionCollection,
  subcriptionSchema
)
