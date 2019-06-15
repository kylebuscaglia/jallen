const { RESTDataSource } = require('apollo-datasource-rest');

class FoodAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.yelp.com/v3/businesses';
  }
  
foodReducer(food) {
  return {
    id: food.businesses.id,
    name: food.businesses.name,
    url: food.businesses.url
  };
}

async getAllFood(zip) {
  const response = await this.get('search?location=' + zip);
  return Array.isArray(response)
    ? response.map(food => this.foodReducer(food))
    : [];
}

  
}

module.exports = FoodAPI;
