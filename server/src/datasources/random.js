const { RESTDataSource } = require('apollo-datasource-rest');

class RandomAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://randomuselessfact.appspot.com';
  }
  
randomReducer(random) {
  return {
    fact: random.text
  };
}

async getRandomFact() {
  const response = await this.get('random.json?language=en');
  return this.randomReducer(response);
}

  
}

module.exports = RandomAPI;