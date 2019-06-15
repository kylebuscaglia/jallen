const { RESTDataSource } = require('apollo-datasource-rest');

class FoodAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.yelp.com/v3/businesses';
  }
  
  willSendRequest(request) {
	request.headers.set('Authorization', 'Bearer gbHE13HIoDv6kEEE2YcgonX7kVvIOQuSUbKuAXcmsvt3VDnRy3N9fSkP17NaJYlp46n3fWSgot5qao8LRLNMV1U45pQSRWunjk9_RHq_ItTlpheRXjlG3VI42AQFXXYx');
  }
  
foodReducer(food) {
  return {
    id: food.id,
    name: food.name,
    url: food.url
  };
}

async getAllFood(zip) {
  
  var offset = Math.floor((Math.random() * 30) + 1);
  const response = await this.get('search?limit=1&offset=' + offset + '&location=' + zip);
  
  return Array.isArray(response.businesses)
    ? response.businesses.map(food => this.foodReducer(food))
    : [];
}

  
}

module.exports = FoodAPI;
