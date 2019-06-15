const { RESTDataSource } = require('apollo-datasource-rest');

// Our API that will get an activity suggestions
class ActivityAPI extends RESTDataSource {
  constructor() {
    super();
    // BoredAPI base url
    this.baseURL = 'https://www.boredapi.com/api/';
  }
  
// Reduce an activity from bored api to our graphql schema type
activityReducer(activity) {
  return {
    id: activity.key,
    name: activity.activity,
    type: activity.type
  };
}


// Issue the http request to get an activity
async getActivity() {
  // Issue the http request
  const response = await this.get('activity');
  // reduce it to a graphsql schema
  return this.activityReducer(response);
}
  
  
}

module.exports = ActivityAPI;
