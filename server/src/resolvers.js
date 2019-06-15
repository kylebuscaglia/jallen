module.exports = {
  Query: {
    activity: (_, __, { dataSources }) =>
      dataSources.activityAPI.getActivity(),
	food: (_, {zip}, { dataSources }) =>
      dataSources.foodAPI.getAllFood(zip),
	random: (_, __, {dataSources}) =>
	  dataSources.randomAPI.getRandomFact()
  }
};