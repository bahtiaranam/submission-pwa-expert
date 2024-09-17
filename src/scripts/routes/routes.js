import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Home from '../views/pages/home';

const routes = {
  '/': Home, // default page
  '/favorites': Favorite,
  '/detail/:id': Detail,
//   '/upcoming': Upcoming,
};

export default routes;
