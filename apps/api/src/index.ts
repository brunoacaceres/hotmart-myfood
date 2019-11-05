import server from './server'
import { connect, models } from './models'
// console.log('MONGO_URI: ', process.env.MONGO_URI)

const { PORT: port = 4000 } = process.env
const main = async (): Promise<void> => {
  await connect()
  await server.start({ port })
  console.log(`Listening at port ${port}...`)
}

main().catch(console.log)
