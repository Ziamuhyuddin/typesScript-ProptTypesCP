import {View, Text, ImageBackground, Image} from 'react-native';
import React, {FC} from 'react';
import PropTypes, {InferProps} from 'prop-types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SignUpForm from './components/SignUpForm';
import {singUp_bg} from '../../../assets/images';
import app_icon from '../../../assets/icons';
import CustomImage from '../../../shared/components/customImage';
import {RF} from '../../../shared/theme/responsive';
import styles from './styles';
const propTypes = {
  navigation: PropTypes.any,
  route: PropTypes.any,
};

type SignInProps = InferProps<typeof propTypes>;
const SignIn: FC<SignInProps> = SignInProps => {
  return (
    <ImageBackground source={singUp_bg} style={styles.container}>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.keyboard_con}>
        <CustomImage
          path={app_icon}
          width={RF(135)}
          height={RF(106)}
          containerStyle={styles.logo_con}
        />
        <SignUpForm />
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};
SignIn.propTypes = propTypes;
export default SignIn;
