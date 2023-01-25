import {View, Text, SafeAreaView, Button} from 'react-native';
import React, {FC, useState} from 'react';
import {styles} from './styles';
import Btn from '../../components/Btn';
import Header from '../../components/Btn/Header';
import AppButton from '../../components/Btn/AppButton';
import AppInput from '../../components/Textinput/AppInput';
import BoxButton from '../../components/BoxButton';
import ReturnBox from '../../components/ReturnBox';
interface Home {
  navigation?: any;
}
interface info {
  name: string;
  age: number;
}
const Home = (props: Home) => {
  // console.log(props.navigation);
  const [name, setname] = useState<string>('Enter your name');
  const data: info = {
    name: 'zia',
    age: 12,
  };
  const pressHandler = () => {
    console.log('button presses');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Btn data={data}/>
        <Btn>
          <Text>Child Component</Text>
        </Btn>
        <Header>
          <Text>ABC</Text>
        </Header>
        {/* Event Props case 1 no parameter and nothing return from function */}
        <AppButton
          onPress={() => {
            console.log('button presses');
          }}></AppButton>
        {/* parameter and return value from function */}
        <Text>Input Name</Text>
        <AppInput
          inputValue={name}
          setval={val => {
            setname(val);
          }}></AppInput>

        {/* styleProps */}
        <BoxButton
          Containerstyle={styles.blackbox}
          textstyle={styles.titleStyle}></BoxButton>
      </View>
    </SafeAreaView>
  );
};

export default Home;
