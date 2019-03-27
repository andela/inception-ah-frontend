export default ({
  firstName,
  lastName,
  middleName,
  biography,
  imageURL,
  gender,
  mobileNumber
}) => ({
  firstName,
  lastName,
  middleName,
  biography: biography || "",
  imageURL: imageURL || "",
  gender: gender || "",
  mobileNumber: mobileNumber || ""
});
