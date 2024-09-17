import FavoriteMovieIdb from '../../data/favorite-movie-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading">Your Favorites Restaurant</h2>
            <div id="movies" class="movies">
      
            </div>
          </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const movies = await FavoriteMovieIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');

    movies.forEach((movie) => {
      moviesContainer.innerHTML += createRestaurantItemTemplate(movie);
    });
  },
};

export default Favorite;
