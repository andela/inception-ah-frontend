import HomePage from "<pages>/Homepage";
import SignUpWrapper from "<components>/auth/SignUp";
import ProfilePage from "<pages>/ProfilePage";
import SocialRedirect from "<components>/auth/SocialAuth";
import VerifyAccount from "<components>/auth/VerifyAccount";

const Routes = {
  default: [
    {
      exact: true,
      path: "/",
      component: HomePage
    },
    {
      path: "/signup",
      component: SignUpWrapper
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
