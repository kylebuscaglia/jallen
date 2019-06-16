const { RESTDataSource } = require('apollo-datasource-rest');

// Our API that will get a food suggestion
class FoodAPI extends RESTDataSource {
  constructor() {
	super();
    // Yelps base url for their api
    this.baseURL = 'https://api.yelp.com/v3/businesses';
  }
  
  // Initalize all HTTP requests to have an Authorization header
  willSendRequest(request) {
	  request.headers.set('Authorization', 'Bearer gbHE13HIoDv6kEEE2YcgonX7kVvIOQuSUbKuAXcmsvt3VDnRy3N9fSkP17NaJYlp46n3fWSgot5qao8LRLNMV1U45pQSRWunjk9_RHq_ItTlpheRXjlG3VI42AQFXXYx');
  }
  
  // Reduce an food item from yelp api to our graphql schema type
  foodReducer(food) {
    return {
      id: food.id,
      name: food.name,
      url: food.url
    };
  }

  // Issues the HTTP request to yelp to get our suggestion.
  // Needs a zip code as a parameter
  async getAllFood(zip) {
    // Get a random number between 1 an 20 (default results returned by yelp)
    var offset = Math.floor((Math.random() * 20) + 1);
    // we limit each search to 1 result and we use our randomly generated offset to get different results
    const response = await this.get('search?limit=1&offset=' + offset + '&location=' + zip);
    
    // Grab the response, iterate over the array response and reduce it
    return Array.isArray(response.businesses)
      ? response.businesses.map(food => this.foodReducer(food))
      : [];
  }

  
}

module.exports = FoodAPI;
