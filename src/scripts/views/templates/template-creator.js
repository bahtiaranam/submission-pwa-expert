import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (item) => `
  <h2 class="movie__title">${item.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + item.pictureId}" alt="${item.name}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Categories</h4>
    <p>${item.categories.map((category) => ` ${category.name}`)}</p>
    <h4>City</h4>
    <p>${item.city}</p>
    <h4>Address</h4>
    <p>${item.address}</p>
    <h4>Rating</h4>
    <p>${item.rating}</p>
  </div>
  <div class="movie__menus">
    <h3>Menu</h3>
    <h4>• Foods</h4>
    <p>${item.menus.foods.map((food) => ` ${food.name}`)}</p>
    <h4>• Drinks</h4>
    <p>${item.menus.drinks.map((drink) => ` ${drink.name}`)}</p>
  </div>
  <div class="movie__overview">
    <h3>Description</h3>
    <p>${item.description}</p>
  </div>
  <div class="movie__review">
    <h3>Reviews</h3>
    ${item.customerReviews.map((cust) => (
    `<div>
        <h4>• ${cust.name}</h4>
        <p>${cust.review}</p>
        <p>${cust.date}</p>
    </div>
    `)).join('')}
  </div>
`;

const createRestaurantItemTemplate = (item) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${item.title}"
           src="${item.pictureId ? CONFIG.BASE_IMAGE_URL + item.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${item.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${item.id}">${item.name}</a></h3>
      <p>${item.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
