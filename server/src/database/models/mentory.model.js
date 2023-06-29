import mongoose from 'mongoose'

const mentoriesCollection = 'mentories'

mongoose.set('strictQuery', true)

const mentoriesSchema = new mongoose.Schema(
  {
    state: { type: String, default: 'active', required: true },
    avatar: { type: String, required: true },
    author: { type: String, required: true },
    email: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true, maxLength: 1000 },
    area: {
      type: String,
      enum: ['Análisis de Sistemas', 'Seguridad e Higiene', 'General']
    },
    level: {
      type: String,
      enum: ['Introductorio', 'Intermedio', 'Avanzado']
    },
    year_career: { type: Number, min: 1, max: 3 },
    capacity: { type: Number, required: true, min: 1, max: 10 },
    classes_quantity: { type: Number, required: true, min: 1 },
    classes_duration: { type: Number, required: true, min: 1, max: 4 },
    modality: {
      type: String,
      enum: ['Presencial', 'Asíncrona', 'Virtual'],
      required: true
    },
    location: { type: String, required: true },
    time: { type: String, required: true },
    date_specific: { type: String },
    day: { type: String },
    subscriptors_email: { type: [String], required: true }
  },
  { timestamps: true }
)

export const MentoryModel = mongoose.model(mentoriesCollection, mentoriesSchema)
