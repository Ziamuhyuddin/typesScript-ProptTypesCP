import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import CustomInput from './CustomInput';
import {RF} from '../../../../shared/theme/responsive';
import {COLORS} from '../../../../shared/theme/colors';
import {RestaurantSignUpSchema} from '../../../../shared/theme/validations';

const SignUpForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
    education: '',
  };

  const submitHandler = ({setSubmitting}: any) => {
    // const data: any = {email: String(email)};
  };
  return (
    <View style={styles.formCon}>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={RestaurantSignUpSchema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          handleBlur,
        }) => {
          return (
            <>
              <CustomInput
                label={'First Name'}
                placeholder={'First Name i-e John'}
                value={values.firstName}
                autoCapitalize={'none'}
                onChangeText={handleChange('firstName')}
                error={
                  touched.firstName && errors.firstName ? errors.firstName : ''
                }
              />
              <CustomInput
                label={'Last Name'}
                placeholder={'Last Name i-e wick'}
                value={values.lastName}
                autoCapitalize={'none'}
                keyboardType="email-address"
                onChangeText={handleChange('lastName')}
                error={
                  touched.lastName && errors.lastName ? errors.lastName : ''
                }
              />
              <CustomInput
                label={'Email'}
                placeholder={'johndoe@email.com'}
                value={values.email}
                autoCapitalize={'none'}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                error={touched.email && errors.email ? errors.email : ''}
              />
              <CustomInput
                label={'Password'}
                placeholder={'Password'}
                value={values.password}
                autoCapitalize={'none'}
                onChangeText={handleChange('password')}
                error={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <CustomInput
                label={'Confirm Password'}
                placeholder={'Password'}
                value={values.confirmPassword}
                autoCapitalize={'none'}
                onChangeText={handleChange('confirmPassword')}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''
                }
              />
              <CustomInput
                label={'Education'}
                placeholder={'Your education'}
                value={values.education}
                onChangeText={handleChange('education')}
                error={
                  touched.education && errors.education ? errors.education : ''
                }
              />

              <TouchableOpacity style={styles.buttonCon} onPress={handleSubmit}>
                {isSubmitting ? (
                  <ActivityIndicator size={'small'} color={COLORS.purple} />
                ) : (
                  <Text>Login</Text>
                )}
              </TouchableOpacity>
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  buttonCon: {
    borderWidth: 1,
    borderColor: COLORS.purple,
    borderRadius: 8,
    alignSelf: 'center',
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 20,
  },
  formCon: {
    width: '90%',
    backgroundColor: 'white',
    paddingVertical: RF(30),
    paddingHorizontal: RF(15),
    alignSelf: 'center',
    borderRadius: RF(10),
    borderColor: COLORS.purple,
    borderWidth: 1,
  },
});
