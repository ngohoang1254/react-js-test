import HomePage from "./../containers/Home/HomePage";
import AboutPage from "./../containers/Home/AboutPage";
import MovieDetail from "./../containers/Home/MovieDetail";
import Movies from "./../containers/Admin/Movies";
import Users from "./../containers/Admin/Users";
import HOC from "./../containers/Home/HOC";
import HooksPage from "../containers/Home/HooksPage";
import MaterialPage from "../containers/Home/MaterialPage";
const routesHome = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/about",
    component: AboutPage,
    exact: false,
  },
  {
    path: "/movie/:id",
    component: MovieDetail,
    exact: false,
  },
  {
    path: "/hoc",
    component: HOC,
    exact: false,
  },
  {
    path: "/hooks",
    component: HooksPage,
    exact: false,
  },
  {
    path : "/material",
    component : MaterialPage,
    exact: false
  }
];

const routesAdmin = [
  {
    path: "/admin/movies",
    component: Movies,
    exact: false,
  },
  {
    path: "/admin/users",
    component: Users,
    exact: false,
  },
];

export { routesHome, routesAdmin };
