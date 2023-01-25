import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

interface Props {
  data?: any;
  children?: string | React.ReactNode;
}
//const Btn: FC<Props> = (props: Props) => {
const Btn: FC<Props> = Props => {
  console.log(Props);
  return (
    <View>
      <Text>{Props?.data?.name}</Text>
      <Text>{Props.children}</Text>
    </View>
  );
};

export default Btn;

const styles = StyleSheet.create({});
