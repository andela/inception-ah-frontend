import HomePage from "<Pages>/HomePage";
import SignInWrapper from "<Auth>/SignIn";
import SignUpWrapper from "<Auth>/Signup";
import ProfilePage from "<Pages>/Profile";
import SocialRedirect from "<Auth>/SocialAuth";

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
      path: "/signup",
      component: SignUpWrapper
    },
    {
      path: "/social-auth",
      component: SocialRedirect
    }
  ],
  secured: [
    {
      path: "/profile",
      component: ProfilePage
    }
  ]
};
export default Routes;
