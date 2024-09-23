/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item__content');
  I.click(locate('.restaurant-item__content button').first());

  // add favorite
  I.seeElement('#likeButtonContainer button');
  I.click('#likeButtonContainer button');

  I.amOnPage('/#/favorites');
  I.seeElement('.restaurant-item');

  I.seeElement('.restaurant-item__content');
  I.click(locate('.restaurant-item__content button').first());

  I.seeElement('#likeButtonContainer button');
  I.click('#likeButtonContainer button');

  I.amOnPage('/#/favorites');
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
});
