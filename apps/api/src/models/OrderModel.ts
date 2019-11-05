import { Schema, model } from 'mongoose'
import { OrderDocument } from '../types'
const orderItemSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)
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
    items: [orderItemSchema],
  },
  {
    // HABILITANDO CREATEDAT, UPDATEDAT
    timestamps: true,
    // Checar toda a estrutura de todos os schemas do arquivo
    useNestedStrict: true,
  },
)

export default model<OrderDocument>('Order', orderSchema)
