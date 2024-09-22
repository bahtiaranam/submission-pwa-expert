import {
  describe, it, expect, beforeEach,
} from '@jest/globals';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteMovieIdb from '../src/scripts/data/favorite-movie-idb';

describe('Unliking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  const addFavoritesList = async () => {
    await FavoriteMovieIdb.putMovie({ id: 1 });
  };

  beforeEach(() => {
    addLikeButtonContainer();
    addFavoritesList();
  });

  it('should show the unlike button when the movie has been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeTruthy();
  });

  it('should not show the like button when the movie has been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this movie"]')).toBeFalsy();
  });

  it('should be able to unlike the movie', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    const button = document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(button).toBeTruthy();
  });

  it('should delete restaurant from favorites success', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    // Tambahkan film dengan ID 1 ke daftar resto yang disukai
    expect(await FavoriteMovieIdb.getAllMovies()).toEqual([{ id: 1 }]);

    // Simulasikan pengguna menekan tombol suka restaurant
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Restor berhasil di hapus
    await FavoriteMovieIdb.deleteMovie(1);
    expect(await FavoriteMovieIdb.getAllMovies()).toEqual([]);
  });

  it('should delete restaurant selected but id not in a list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 2,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // resto id 2 not in a favorites list
    const movie = await FavoriteMovieIdb.getMovie(2);
    expect(movie).toEqual({ id: 2 });
    expect(await FavoriteMovieIdb.getAllMovies()).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
