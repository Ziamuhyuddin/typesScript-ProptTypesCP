import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import SignUp from './src/screens/Auth/SignUp';

const App = () => {
  // return <Home></Home>;
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Profile/> */}
      <SignUp />
    </SafeAreaView>
  );
};

export default App;
