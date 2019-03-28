import HomePage from "<pages>/Homepage";
import SignInWrapper from "<auth>/SignIn";
import SignUpWrapper from "<auth>/SignUp";
// import ProfilePage from "<pages>/Profile";
import ViewArticlePage from "<pages>/viewArticle";
import SocialRedirect from "<auth>/SocialAuth";
import PasswordRequest from "<auth>/RequestPasswordReset";
import ResetPassword from "<auth>/ResetPassword";
import VerifyAccount from "<auth>/VerifyAccount";
import ProfileWrapper from "<components>/ProfileWrapper";
import CreateArticle from "<pages>/CreateArticle";
import NotFound from "<components>/NotFound";

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
      path: "/resetPassword",
      component: ResetPassword
    },
    {
      path: "/social-auth",
      component: SocialRedirect
    },
    {
      path: "/password-reset",
      component: PasswordRequest
    },
    // {
    //   path: "/profile",
    //   component: ProfilePage
    // },
    {
      path: "/profile/:userId",
      component: ProfileWrapper
    },
    {
      path: "/verification",
      component: VerifyAccount
    },
    {
      exact: true,
      path: "/post",
      component: CreateArticle
    },
    {
      path: "/articles/:slug",
      component: ViewArticlePage
    },
    {
      path: "*",
      component: NotFound
    }
  ],
  secured: [
    {
      exact: true,
      path: "/post",
      component: CreateArticle
    },
  ]
};
export default Routes;
