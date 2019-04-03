import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";
import { ToastContainer } from "react-toastify";
import BaseRoute from "<components>/BaseRoute";
import SignUpWrapper from "<auth>/SignUp";
import HomePage from "<pages>/Homepage";
import ProfilePage from "<pages>/ProfilePage";
import SocialRedirect from "<auth>/SocialAuth";
import VerifyAccount from "<auth>/VerifyAccount";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const storeMock = configureMockStore(middleware);
const store = storeMock({})

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

  it("renders <SignUpWrapper /> component", () => {
    const component = renderRoutes("/signup");

    expect(component.find(SignUpWrapper)).toHaveLength(1);
  });

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
