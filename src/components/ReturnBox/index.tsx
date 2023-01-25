import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
interface ReturnBoxProps {
  onpress: () => void;
}
const ReturnBox = (props: ReturnBoxProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onpress;
      }}>
      <Text>ReturnBox</Text>
    </TouchableOpacity>
  );
};

export default ReturnBox;
