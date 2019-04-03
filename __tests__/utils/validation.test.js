import validateCreateForm, { isNotValid } from "../../src/utils/validation";

const mockChangeValue = (name, value) => ({
  target: {
    name,
    value
  }
});

const state = {
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  },
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

describe("Create Validation Form test", () => {
  it("should return form errors for a form that is not valid", () => {
    const formErrors = validateCreateForm(
      state,
      mockChangeValue("firstName", "")
    );
    expect(formErrors.firstName).toEqual("First name is too short");
  });

  it("should return no errors for a form that is correctly filled", () => {
    const formErrors = validateCreateForm(
      state,
      mockChangeValue("firstName", "Joshua")
    );
    expect(formErrors.firstName).toEqual("");
  });

  it("should return no errors for a form that is correctly filled", () => {
    const formErrors = validateCreateForm(
      state,
      mockChangeValue("lastName", "josh")
    );
    expect(formErrors.lastName).toEqual("");
  });

  it("should return errors for a form that is not correctly filled", () => {
    const invalidLastNameMock = Object.assign(
      mockChangeValue("lastName", "josh"),
      {
        target: { name: "lastName", value: "" }
      }
    );
    const formErrors = validateCreateForm(state, invalidLastNameMock);
    expect(formErrors.lastName).toEqual("Last name is too short");
  });

  it("should return no errors for a form that is correctly filled", () => {
    const formErrors = validateCreateForm(
      state,
      mockChangeValue("email", "test@email.com")
    );
    expect(formErrors.email).toEqual("");
  });

  it("should return no errors for a form that is correctly filled", () => {
    const formErrors = validateCreateForm(
      state,
      mockChangeValue("email", "kenekee")
    );
    expect(formErrors.email).toEqual("Email is not valid");
  });

  it("should return form errors for a form that is not valid", () => {
    const formErrors = validateCreateForm(
      state,
      mockChangeValue("password", "jos")
    );
    expect(formErrors.password).toEqual(
      "Password must be atleast 6 chars with atleast 1 "
      + "uppercase, 1 number, & 1 special char (#?!@$%^&*-.)"
    );
  });

  it("should return no errors for a form that is valid", () => {
    const validPasswordMock = Object.assign(
      mockChangeValue("password", "jos"),
      {
        target: {
          name: "password",
          value: "Inception@2019"
        }
      }
    );
    const formErrors = validateCreateForm(state, validPasswordMock);
    expect(formErrors.password).toEqual("");
  });

  it("should return no errors for a form that is valid", () => {
    const isNotValidResult = isNotValid(state);
    expect(isNotValidResult).toEqual(true);
  });

  it("should return errors for a form that is not valid", () => {
    const isNotValidResult = isNotValid(state.errors);
    expect(isNotValidResult).toEqual(false);
  });

  it("should not return any error for an unknown field", () => {
    const validationResult = validateCreateForm(state, {
      target: { name: "unknown", value: "gorilla" }
    });
    expect(validationResult.unknown).toEqual(undefined);
  });
});
