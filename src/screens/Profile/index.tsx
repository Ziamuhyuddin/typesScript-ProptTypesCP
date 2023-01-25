import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import ProfileViewer from './components/ProfileViewer'
import { colorType } from '../../shared/theme/colors'


const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileViewer name={'zia mohe uddin '} 
      
      multipleObjectProp={{name:'abc',age:123}}
      bg_color={colorType[2]} age={27} size={19} bonus={(val)=>{console.log('Age is',val)}} title='Press' />
  
    </View>
  )
}

export default Profile

