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

    if (movies.length === 0) {
      moviesContainer.innerHTML = `
        <p class="movie-item__not__found">Tidak ada film untuk ditampilkan</p>
      `;
    } else {
      movies.forEach((movie) => {
        moviesContainer.innerHTML += createRestaurantItemTemplate(movie);
      });
    }
  },
};

export default Favorite;
