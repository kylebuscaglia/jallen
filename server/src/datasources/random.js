const { RESTDataSource } = require('apollo-datasource-rest');

// Our API that will get a random fact
class RandomAPI extends RESTDataSource {
  constructor() {
    super();
    // random fact base url
    this.baseURL = 'http://randomuselessfact.appspot.com';
  }

  // Reduces our api results to our GraphQL schema
  randomReducer(random) {
    return {
      fact: random.text
    };
  }

  // Issues an HTTP requests to get a random fact
  async getRandomFact() {
    const response = await this.get('random.json?language=en');
    // Reduce the response from the api to our graphql schema
    return this.randomReducer(response);
  }
}

module.exports = RandomAPI;