import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import { createMovieDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div class="content">
        <div id="movie" class="movie"></div>
        <div id="likeButtonContainer"></div>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#movie');
    restaurantContainer.innerHTML = createMovieDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },
};

export default Detail;
