import { buildOrderByResolvers } from '../utils'

// export default {
//   name_ASC: 'name',
//   name_DESC: '-name',
// }
export default buildOrderByResolvers(['name', 'price', 'unit'])
