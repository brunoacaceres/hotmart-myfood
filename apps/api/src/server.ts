import { resolve } from 'path'
import { GraphQLServer } from 'graphql-yoga'
import { models as db } from './models'
import { catchErrorsMiddleware } from './middlewares/catchErrorsMiddleware'
import resolvers from './resolvers'
import { AuthDirective } from './directives/AuthDirective'

const typeDefs = resolve(__dirname, 'schema.graphql')

const server = new GraphQLServer({
  resolvers,
  typeDefs,
  context: { db },
  middlewares: [catchErrorsMiddleware],
  schemaDirectives: {
    auth: AuthDirective,
  },
})

export default server
