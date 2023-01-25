import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import PropTypes, {InferProps} from 'prop-types';
import {COLORS} from '../../../../shared/theme/colors';

const InputProps = {
  containerStyle: PropTypes.any,
  error: PropTypes.any,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  mainContainer: PropTypes.any,
  phoneInput: PropTypes.bool,
  overLay: PropTypes.bool,
  multiline: PropTypes.bool,
  value: PropTypes.string,
  autoCapitalize: PropTypes.string,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.any,
  onSubmitEditing: PropTypes.any,
};

type props = InferProps<typeof InputProps>;

const CustomInput: FC<props> = props => {
  return (
    <View>
      {!!props.label && <Text style={styles.inputText}>{props.label}</Text>}
      <Pressable
        style={[
          styles.container,
          {borderColor: props.error ? COLORS.RED : COLORS.purple},
        ]}>
        <TextInput
          onSubmitEditing={props.onSubmitEditing}
          placeholder={
            props.placeholder ? props.placeholder : 'fill in the blanks'
          }
          onChangeText={props.onChangeText}
          style={styles.inputStyle}
        />
      </Pressable>

      {!!props.error && <Text style={{color: 'red'}}>{props.error}</Text>}
    </View>
  );
};

CustomInput.propTypes = InputProps;
CustomInput.defaultProps = {};
const styles = StyleSheet.create({
  container: {
    marginTop: 2,
    paddingHorizontal: 10,
    marginBottom: 3,
    borderWidth: 1,
    height: 48,
    borderRadius: 6,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    fontSize: 14,
    color: 'black',
    width: '100%',
    height: '100%',
  },
  multiline: {},
  flexStart: {
    alignItems: 'flex-start',
  },
  inputText: {
    paddingHorizontal: 4,
    marginVertical: 3,

    fontSize: 15,
    color: 'gray',
  },
});

export default CustomInput;
