// Declare our imports
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const ActivityAPI = require('./datasources/activity');
const FoodAPI = require('./datasources/food');
const RandomAPI = require('./datasources/random');

// Create a new ApolloServer and register our data sources
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
  	// BoredAPI
    activityAPI: new ActivityAPI(),
    // Yelp
	foodAPI: new FoodAPI(),
	// Random fact
	randomAPI: new RandomAPI()
  })
});

// Initalize and laucn our server
server.listen('80', '0.0.0.0').then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
