import {ApolloServer} from 'apollo-server-micro';
import {schema} from '../../../graphql/schema';
import {typeDefs} from '../../../graphql/schema';
import {resolvers} from '../../../graphql/resolvers';
import {createContext} from '../../../graphql/contex';
import Cors from 'micro-cors';

const cors = Cors();

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
  resolvers,
  typeDefs,
  introspection: true,
  playground: true,
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
