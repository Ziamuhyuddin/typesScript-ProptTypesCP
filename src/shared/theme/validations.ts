import * as Yup from 'yup';

const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

const CheckEmailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email Required'),
});

const ForgetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email Required'),
});

const LoginScreenSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(8, 'Password too Short')
    .matches(
      passwordRegExp,
      'Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number',
    ),
});

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password Required')
    .min(8, 'Password too Short')
    .matches(
      passwordRegExp,
      'Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number',
    ),
  confirm_password: Yup.string()
    .required('Confirm Password Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const UserSignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name Required'),
  lastName: Yup.string().required('Last Name Required'),
  email: Yup.string().email('Invalid Email').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(8, 'Password too Short')
    .matches(
      passwordRegExp,
      'Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number',
    ),
});

const RestaurantSignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name Required'),
  lastName: Yup.string().required('Last Name Required'),
  email: Yup.string().email('Invalid Email').required('Email Required'),
  password: Yup.string()
    .required('Password Required')
    .min(8, 'Password too Short')
    .matches(
      passwordRegExp,
      'Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number',
    ),
  confirmPassword: Yup.string()
    .required('Password Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),

  education: Yup.string().required('Education Required'),
});

const RestaurantResgistrationSchema = Yup.object().shape({
  name: Yup.string().required('Restaurant Name Required'),
  tagline: Yup.string().required('Restaurant Tagline Required'),
  email: Yup.string().email('Invalid Email').required('Email Required'),
  phoneNumber: Yup.string().required('Phone No. is Required'),
  pricing: Yup.object().shape({
    title: Yup.string().required('Price Required'),
  }),
  cuisine: Yup.object().shape({
    title: Yup.string().required('Cuisine Required'),
  }),
  location: Yup.object().shape({
    address: Yup.string().required('Address required'),
  }),
  description: Yup.string().required('Description Required'),
});

const NewPasswordSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .required('Password Required')
    .min(8, 'Password too Short'),
  password: Yup.string()
    .required('Password Required')
    .min(8, 'Password too Short')
    .matches(
      passwordRegExp,
      'Password must contain at least One Upper Case Character, One Lower Case Character, One Special Character and One Number',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const HelpAndContactSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name Required'),
  lastName: Yup.string().required('Last Name Required'),
  email: Yup.string().email('Invalid Email').required('Email Required'),
  query: Yup.string().required('Subject Required'),
  message: Yup.string().required('Message Required'),
});
const NewCouponSchema = Yup.object().shape({
  title: Yup.string().required('Please Select a Deal'),
  startDate: Yup.string().required('Please Select Your Starting Date'),
  expiryDate: Yup.string().required('Please Select Your Expiry Date'),
  startTime: Yup.string().required('Please select your Start Time'),
  expiryTime: Yup.string().required('Please select your Expiry Time'),
  deals: Yup.string().required('Select Total Deals'),
  description: Yup.string().required('Description Required'),
});
const analyticsSchema = Yup.object().shape({
  startDate: Yup.string().required('Please Select Your Starting Date'),
  endDate: Yup.string().required('Please Select Your Expiry Date'),
});
const AddHappyHourSchema = Yup.object().shape({
  title: Yup.string().required('Title Required'),
  details: Yup.string().required('Details Required'),
  specials: Yup.array().of(Yup.string().required('Speciality Required')),
});
const EditProfileSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name Required'),
  lastName: Yup.string().required('Last Name Required'),
});

const CustomUpdageBioSchema = Yup.object().shape({
  name: Yup.string().required('Restaurant Name Required'),
  email: Yup.string().email('Invalid Email').required('Email Required'),
  location: Yup.object().shape({
    address: Yup.string().required('Address Required'),
  }),
  pricing: Yup.string().required('Please Select Price'),
  openingTime: Yup.string().required('Please select your Opening Time'),
  closingTime: Yup.string().required('Please select your Closing Time'),
  description: Yup.string().required('Description Required'),
});

export {
  AddHappyHourSchema,
  EditProfileSchema,
  ForgetPasswordSchema,
  ResetPasswordSchema,
  HelpAndContactSchema,
  CheckEmailSchema,
  LoginScreenSchema,
  RestaurantResgistrationSchema,
  UserSignUpSchema,
  RestaurantSignUpSchema,
  CustomUpdageBioSchema,
  NewCouponSchema,
  NewPasswordSchema,
  analyticsSchema,
};
