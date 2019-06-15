module.exports = {
  // Create our GraphQL queries
  Query: {
    activity: (_, __, { dataSources }) =>
      // get an activity from boredapi
      dataSources.activityAPI.getActivity(),
	food: (_, {zip}, { dataSources }) =>
	  // get a food suggestion from yelp
      dataSources.foodAPI.getAllFood(zip),
	random: (_, __, {dataSources}) =>
	  // Get a random fact
	  dataSources.randomAPI.getRandomFact()
  }
};