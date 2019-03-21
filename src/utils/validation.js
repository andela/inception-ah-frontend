import { emailRegex, passwordRegex } from "<utils>/regex";

export default (state, e) => {
  const { name, value } = e.target;
  const { errors } = state;

  switch (name) {
    case "firstName":
      errors.firstName = value.length > 1 ? "" : "First name is too short";
      break;

    case "lastName":
      errors.lastName = value.length > 1 ? "" : "Last name is too short";
      break;

    case "email":
      errors.email = emailRegex.test(value) ? "" : "Email is not valid";
      break;

    case "password":
      errors.password = passwordRegex.test(value)
        ? ""
        : "Password must be atleast 6 chars with atleast 1 "
         + "uppercase, 1 number, & 1 special char (#?!@$%^&*-.)";
      break;
    default:
      break;
  }
  return errors;
};

export const isNotValid = errors => {
  let valid = true;

  Object.values(errors).forEach(value => {
    value.length > 0 && (valid = false);
  });
  return valid;
};
