const { gql } = require('apollo-server');

const typeDefs = gql
`type Activity {
  id: ID!
  type: String
  name: String
}
type Query {
  activity: Activity
  countActivities: Int!
}
`;

module.exports = typeDefs;