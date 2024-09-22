/* eslint-disable no-undef */
Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('liking one movie', ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

  I.amOnPage('/');

  I.seeElement('.movie-item__content');
  I.click(locate('.movie-item__content button').first());

  // add favorite
  I.seeElement('#likeButtonContainer button');
  I.click('#likeButtonContainer button');

  I.amOnPage('/#/favorites');
  I.seeElement('.movie-item');

  I.seeElement('.movie-item__content');
  I.click(locate('.movie-item__content button').first());

  // cancel favorite
  I.seeElement('#likeButtonContainer button');
  I.click('#likeButtonContainer button');

  I.amOnPage('/#/favorites');
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');

  // ... kita akan mengisi uji coba berikutnya ...
});
