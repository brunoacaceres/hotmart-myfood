import { Document, Types } from 'mongoose'
import {
  OrderItemCreateInput,
  OrderItemSubdocument,
  OrderItemUpdateInput,
  User,
} from '.'

export enum OrderStatus {
  WATING_PAYMENT,
  IN_QUEUE,
  PREPARING,
  READY,
  ON_THE_WAY,
  DELIVERED,
}

export interface Order {
  _id: Types.ObjectId
  user: User | Types.ObjectId
  total: number
  status: OrderStatus
  items: Types.DocumentArray<OrderItemSubdocument>
  createdAt: string
  updatedAt: string
}

export interface OrderDocument extends Order, Document {
  _id: Types.ObjectId
}

export interface OrderByIdInput {
  _id: string
}

type OrderCreateInput = Pick<Order, 'status' | 'user'>

interface OrderUpdateInput extends OrderCreateInput {
  itemstoAdd: OrderItemCreateInput[]
  itemstoUpdate: OrderItemUpdateInput[]
  itemstoDelete: string[]
}

export interface OrderCreateArgs {
  data: OrderCreateInput & {
    items: OrderItemCreateInput[]
  }
}

export interface OrderDeleteArgs {
  _id: string
}

export interface OrderUpdateArgs extends OrderDeleteArgs {
  data: OrderUpdateInput
}
