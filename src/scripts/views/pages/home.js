import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="landing__view">
          <picture>
            <source media="(max-width: 600px)" srcset="./images/hero-image_4-small.jpg">
            <img class="landing-page" src='./images/hero-image_4-large.jpg' alt="Dicoding Fact Sheet">
          </picture>
        </div>
        <div class="content">
            <h2 class="content__heading">Explore Resturants</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const res = await RestaurantDbSource.allRestaurant();
    const listContainer = document.getElementById('restaurants');
    res.forEach((item) => {
      listContainer.innerHTML += createRestaurantItemTemplate(item);
    });
  },
};

export default Home;
