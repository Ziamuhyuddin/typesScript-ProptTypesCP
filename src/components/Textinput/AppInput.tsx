import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
interface Apptextprops {
  setval: (val: string) => void;
  inputValue: string;
}
const AppInput = (props: Apptextprops) => {
  return (
    <View>
      <TextInput
        value={props.inputValue}
        onChangeText={val => {
          props.setval(val);
        }}></TextInput>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({});
