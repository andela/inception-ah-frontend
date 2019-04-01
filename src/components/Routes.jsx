import HomePage from "../pages/Homepage";
import SignInWrapper from "./auth/SignInWrapper";
import ProfilePage from "../pages/ProfilePage";
import SocialRedirect from "./auth/SocialAuth";
import VerifyAccount from "./auth/VerifyAccount";

const Routes = {
  default: [
    {
      exact: true,
      path: "/",
      component: HomePage
    },
    {
      path: "/signin",
      component: SignInWrapper
    },
    {
      path: "/social-auth",
      component: SocialRedirect
    },
    {
      path: "/profile",
      component: ProfilePage
    },
    {
      path: "/verification",
      component: VerifyAccount
    }
  ]
};

export default Routes;
