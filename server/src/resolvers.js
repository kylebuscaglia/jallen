module.exports = {
  Query: {
    activity: (_, __, { dataSources }) =>
      dataSources.activityAPI.getActivity()
  }
};