const { RESTDataSource } = require('apollo-datasource-rest');

class ActivityAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.boredapi.com/api/';
  }
  
activityReducer(activity) {
  return {
    id: activity.key,
    name: activity.activity,
    type: activity.type
  };
}


async getActivity() {
  const response = await this.get('activity');
  return this.activityReducer(response);
}
  
  
}

module.exports = ActivityAPI;
