const { gql } = require('apollo-server');

const typeDefs = gql
`type Activity {
  id: ID!
  type: String
  name: String
}
type Restaurant {
  id: ID!
  url: String
  name: String
  zip: String
}
type RandomFact {
  fact: String
}
type Query {
  activity: Activity
  food(zip: String): [Restaurant]!
  random: RandomFact!
}
`;

module.exports = typeDefs;