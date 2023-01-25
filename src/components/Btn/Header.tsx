import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
interface Props {
  children: React.ReactNode;
}
const Header = (Props:Props) => {
  return (
    <View>
      <Text>Here we are</Text>
      {Props.children}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
