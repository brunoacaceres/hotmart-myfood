import { Models } from '.'

export interface CheckExistenceOptions {
  model: keyof Models
  db: Models
  field?: string // Campo de busca
  value?: any // Valor do campo
  message?: string
  where?: Record<string, any>
  errorCode?: string
  extensions?: Record<string, any>
}
