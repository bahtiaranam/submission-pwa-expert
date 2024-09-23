import {
  describe, it, expect, beforeEach,
} from '@jest/globals';
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  const addFavoritesList = async () => {
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  };

  beforeEach(() => {
    addLikeButtonContainer();
    addFavoritesList();
  });

  it('should show the unlike button when the restaurant has been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not show the like button when the restaurant has been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to unlike the restaurant', async () => {
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
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    // Simulasikan pengguna menekan tombol suka restaurant
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Restor berhasil di hapus
    await FavoriteRestaurantIdb.deleteRestaurant(1);
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
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
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(2);
    expect(restaurant).toEqual({ id: 2 });
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
