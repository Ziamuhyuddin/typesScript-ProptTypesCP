import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
interface buttonProps {
  onPress: () => void;
}
const AppButton = (props: buttonProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}>
      <Text>AppButton</Text>
    </TouchableOpacity>
  );
};
export default AppButton;
