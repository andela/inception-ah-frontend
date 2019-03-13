import React from "react";
import ProfilePage from "../../src/pages/ProfilePage";

describe("ProfilePage", () => {
  it("should contain h1 element", () => {
    const profilePageShallow = shallow(<ProfilePage />);
    expect(profilePageShallow.contains(<h1>welcome to Profile</h1>)).toBe(
      true
    );
  });
});
