import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import PropTypes, {InferProps} from 'prop-types';
import {COLORS} from '../../../shared/theme/colors';
import {Formik} from 'formik';
import {RF} from '../../../shared/theme/responsive';
// interface Props {
//   name: string,
//   age?: number,
//   bonus?: () => void;
//   salary?: number,
//   title?:string | 'Press'
// }
const propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bonus: PropTypes.func.isRequired,
  salary: PropTypes.number,
  title: PropTypes.string,
  size: PropTypes.number.isRequired,
  // bg_color: PropTypes.oneOf(COLORS),
  person: PropTypes.exact({
    name: PropTypes.string,
    age: PropTypes.number,
    rducation: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  }),
  multipleObjectProp: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.func, PropTypes.number, PropTypes.string]),
  ).isRequired,
};
type props = InferProps<typeof propTypes>;
const ProfileViewer: React.FC<props> = props => {
  return (
    <View>
      <Text>{props.name}</Text>
      <TouchableOpacity
        onPress={() => props.bonus(props.age)}
        style={styles.btnContainer}>
        <Text style={{fontSize: props.size}}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

ProfileViewer.propTypes = propTypes;
ProfileViewer.defaultProps = {
  title: 'Press',
  size: 10,
};
ProfileViewer.displayName = 'Text';

export default ProfileViewer;

const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: RF(1),
    borderColor: COLORS.GREEN,
    borderRadius: RF(7),
    padding: RF(5),
    paddingHorizontal: RF(10),
    alignSelf: 'center',
  },
});
