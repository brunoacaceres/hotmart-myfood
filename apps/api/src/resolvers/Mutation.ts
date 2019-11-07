import { ProductCreateInput, Resolver } from '../types'

const createProduct: Resolver<ProductCreateInput> = (_, args, { db }) => {
  const { Product } = db
  const { data } = args
  const product = new Product(data)
  console.log('args: ', args)
  console.log('product: ', product)
  return product.save()
}

export default {
  createProduct,
}
