import {gql} from 'apollo-server-micro';

export const typeDefs = gql`
  type User {
    id: String
    name: String
    firstname: String
    midname: String
    lastname: String
    email: String
    contact: String
    accountId: String
  }
  type Query {
    Users: [User]
  }
`;
