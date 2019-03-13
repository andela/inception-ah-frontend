import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import BaseRoute from "../../src/components/BaseRoute";
import HomePage from "../../src/pages/Homepage";
import ProfilePage from "../../src/pages/ProfilePage";
import SocialRedirect from "../../src/components/auth/SocialAuth";
import VerifyAccount from "../../src/components/auth/VerifyAccount";
import store from "../../src/store";

const renderRoutes = path => mount(
  <MemoryRouter initialEntries={[path]}>
    <Provider store={store}>
      <BaseRoute />
      <ToastContainer />
    </Provider>
  </MemoryRouter>
);

describe("<Routes /> component", () => {
  it("renders <HomePage /> component", () => {
    const component = renderRoutes("/");
    expect(component.find(HomePage)).toHaveLength(1);
  });

  // it("renders <SignUpWrapper /> component", () => {
  //   const component = renderRoutes("/signup");
  //   expect(component.find(SignUpWrapper)).toHaveLength(1);
  // });

  it("renders <SocialRedirect /> component", () => {
    const component = renderRoutes("/social-auth");
    expect(component.find(SocialRedirect)).toHaveLength(1);
  });

  it("renders <ProfilePage /> component", () => {
    const component = renderRoutes("/profile");
    expect(component.find(ProfilePage)).toHaveLength(1);
  });

  it("renders <VerifyAccount /> component", () => {
    const component = renderRoutes("/verification");
    expect(component.find(VerifyAccount)).toHaveLength(1);
  });
});
