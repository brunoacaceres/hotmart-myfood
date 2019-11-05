import { Schema, model } from 'mongoose'
import { OrderDocument } from '../types'

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [
        'WATING_PAYMENT',
        'IN_QUEUE',
        'PREPARING',
        'READY',
        'ON_THE_WAY',
        'DELIVERED',
      ],
      default: 'WATING_PAYMENT',
    },
  },
  {
    // HABILITANDO CREATEDAT, UPDATEDAT
    timestamps: true,
  },
)

export default model<OrderDocument>('Order', orderSchema)
