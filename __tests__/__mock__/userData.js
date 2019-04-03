export default {
  userRequestData: {
    irstName: "lateefat",
    lastName: "amuda",
    email: "lateefat.amuda@email.com",
    password: "Inception@2019"
  },
  signinUserRequestData: {
    email: "lateefat.amuda@email.com",
    password: "Inception@2019"
  },
  signUpSuccessResponse: {
    success: true,
    message: `Sign up was successfull. Please check your email to activate your account! 
        If you don't find it in your inbox, please check your spam messages.`,
    user: {
      id: "7e31179f-8e18-4c7f-bb31-75bb01a4a9e8",
      imageURL: `https://lh3.googleusercontent.com/-g4I91oIkL2E/
          AAAAAAAAAAI/AAAAAAAAAvo/GTrcdcIfemU/photo.jpg?sz=50`,
      isVerified: false,
      isNotifiable: false,
      isAdmin: false,
      lastLogin: "2019-03-26T17:01:02.521Z",
      isBlocked: false,
      firstName: "lateefat",
      lastName: "amuda",
      email: "lateefat.amuda@email.com",
      updatedAt: "2019-03-26T17:01:02.522Z",
      createdAt: "2019-03-26T17:01:02.522Z",
      middleName: null,
      gender: null,
      biography: null,
      mobileNumber: null,
      resetToken: null
    }
  },
  signUpFailureResponse: {
    success: false,
    message: "Email has already been used"
  },
  signInSuccessResponse: {
    success: true,
    message: "login successful",
    userId: "7e31179f-8e18-4c7f-bb31-75bb01a4a9e8",
    data: {
      token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3ZTMxMTc5Zi04ZTE4LT
              RjN2YtYmIzMS03NWJiMDFhNGE5ZTgiLCJpYXQiOjE1NTQxMTQ5MDIsImlzcyI6IkF1dGhvc
              nMgSGF2ZW5cIiIsInN1YiI6IkF1dGhlbnRpY2F0aW9uIHRva2VuIn0.55S0kGhWsYT6ZFuO
              pz1V3-agpwmXYzuoSMAJLnaR8qQ`
    }
  },
  signInFailureResponse: {
    success: false,
    message: "Invalid login credentials",
    data: null
  }
};
