import {Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import React from 'react';
interface BoxProps {
  Containerstyle: ViewStyle;
  textstyle: TextStyle;

  // container: ViewStyle;
  // title: TextStyle;
  // icon: ImageStyle;
}
const BoxButton = (props: BoxProps) => {
  return (
    <TouchableOpacity style={props.Containerstyle} onPress={() => {}}>
      <Text style={props.textstyle}>Press</Text>
    </TouchableOpacity>
  );
};

export default BoxButton;
