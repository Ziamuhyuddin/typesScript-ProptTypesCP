import {StyleSheet} from 'react-native';
import {RF} from '../../../shared/theme/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo_con: {
    alignSelf: 'center',
    marginBottom: RF(15),
  },
  keyboard_con: {
    justifyContent: 'center',
    paddingVertical: RF(40),
  },
});

export default styles;
