import { Types } from 'mongoose'
import { Models, UserRole } from '.'

export interface FindDocumentOptions {
  model: keyof Models
  db: Models
  field?: string // Campo de busca
  value?: any // Valor do campo
  message?: string
  where?: Record<string, any>
  errorCode?: string
  extensions?: Record<string, any>
}

export interface TokenPayload {
  sub: Types.ObjectId
  role: UserRole
}

export interface PaginationArgs {
  skip: number
  limit: number
  orderBy: string[]
}
