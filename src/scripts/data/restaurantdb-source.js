import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async allRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_ALL);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantDbSource;
