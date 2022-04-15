import {gql} from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: String
    name: String
    f_name: String
    m_name: String
    l_name: String
    email: String
    contact: String
    accountId: String
  }
  type Query {
    Users: [User]
  }
`;
