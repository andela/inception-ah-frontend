import HomePage from "../pages/Homepage";
import SignInWrapper from "./auth/signInWrapper";
import SignUpWrapper from "./auth/SignUp";
import ProfilePage from "../pages/Profile";
import SocialRedirect from "./auth/SocialAuth";

export default {
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
