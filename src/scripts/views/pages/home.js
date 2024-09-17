import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="landing__view">
          <img class="landing-page" src="/images/heros/hero-image_4.jpg" alt="Dicoding Fact Sheet" />
        </div>
        <div class="content">
            <h2 class="content__heading">Explore Resturants</h2>
            <div id="movies" class="movies">
            </div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const res = await RestaurantDbSource.allRestaurant();
    const listContainer = document.getElementById('movies');
    res.forEach((item) => {
      listContainer.innerHTML += createRestaurantItemTemplate(item);
    });
  },
};

export default Home;
