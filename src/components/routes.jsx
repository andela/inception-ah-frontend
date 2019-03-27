import HomePage from "<pages>/Homepage";
import CreateArticle from "<pages>/CreateArticle";

const Routes = {
  default: [
    {
      exact: true,
      path: "/",
      component: HomePage,
    },
    {
      exact: true,
      path: "/create",
      component: CreateArticle,
    },
  ],
};
export default Routes;
