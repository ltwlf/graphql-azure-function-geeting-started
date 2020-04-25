import { ApolloServer } from 'apollo-server-azure-functions'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context
    playground: {
        settings: {
            'editor.theme': 'dark',
        },
    },
    introspection: true,
})

exports.graphqlHandler = server.createHandler({
    cors: {
        origin: true,
        credentials: true,
    },
})
