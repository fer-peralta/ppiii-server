import mongoose from 'mongoose'

import { config } from '../../config/config.js'
import { subcriptionSchema } from './subscription.model.js'

const userCollection = 'users'

mongoose.set('strictQuery', true)

export const userSchema = new mongoose.Schema(
  {
    state: {
      type: String,
      default: config.DEFAULT_USER_STATE,
      // default: 'pending',
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      minLength: 2,
      maxLength: 50,
      match: [/.+@itbeltran.com.ar/, 'Por favor ingrese un correo válido']
    },
    password: { type: String, required: true },
    name: { type: String, required: true, maxLength: 50 },
    surname: { type: String, required: true, maxLength: 50 },
    adress: { type: String, required: true },
    age: { type: Number, required: true, min: 18, max: 100 },
    phone: { type: String, required: true, minLength: 10, maxLength: 15 },
    avatar: {
      type: String,
      required: true
    },
    type: { type: String, enum: ['normal', 'admin'] },
    gender: {
      type: String,
      enum: ['masculino', 'femenino', 'otro', 'prefiero no decirlo']
    },
    mentories: { type: [{ mentoryId: String }], required: true },
    subscriptions: { type: [subcriptionSchema], required: true }
  },
  { timestamps: true }
)

userSchema.path('email').validate(async email => {
  const emailCount = await mongoose.models.users.countDocuments({ email })
  return !emailCount
}, 'Email already exist')

export const UserModel = mongoose.model(userCollection, userSchema)
