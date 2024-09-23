/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('liking one restaurant', ({ I }) => {
  I.waitForElement('.restaurant-item__not__found', 5);
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item', 5);
  I.seeElement('.restaurant-item');

  // to detail
  I.seeElement('.restaurant-item__content');
  I.click(locate('.restaurant-item__content button').first());

  // add favorite
  I.seeElement('#likeButtonContainer button');
  I.click('#likeButtonContainer button');

  // back to favorite
  I.amOnPage('/#/favorites');

  I.waitForElement('.restaurant-item', 5);
  I.seeElement('.restaurant-item');

  // to detail favorite
  I.seeElement('.restaurant-item__content');
  I.click(locate('.restaurant-item__content button').first());

  // remove favorite
  I.seeElement('#likeButtonContainer button');
  I.click('#likeButtonContainer button');

  // back to favorite
  I.amOnPage('/#/favorites');

  // favorite empty
  I.waitForElement('.restaurant-item__not__found', 5);
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});
