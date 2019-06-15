const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ActivityAPI = require('./datasources/activity');
const FoodAPI = require('./datasources/food');
const RandomAPI = require('./datasources/random');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    activityAPI: new ActivityAPI(),
	foodAPI: new FoodAPI(),
	randomAPI: new RandomAPI()
  })
});

server.listen('80', '0.0.0.0').then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
