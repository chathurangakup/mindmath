import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  SafeAreaView,

  TouchableOpacity
} from 'react-native';

// import {TextInput, HelperText} from 'react-native-paper';

import {colors} from '../../config/styles';

import Images from '../../config/Images';
import TextInputField from '../../components/TextInputField';
import {Button} from '../../components/Button';
import Background from '../../components/Background';
import {AppBar} from '../../components/AppBar';

const AboutUs = (props) => {
  return (
    <SafeAreaView>
   
    <View style={{alignItems: 'center', width: 460}}>

<AppBar
        navigation={props.navigation}
        title={''}
        isShowBack={false}
        isShowHamberger={true}
        isShowProfile={false}
      />
      <Background
        source={Images.BG}
        resizeMode="cover"
        style={styles.mainComp}>

        <View style={{justifyContent:'center',alignItems:'center',paddingRight:60, paddingBottom: 20}}>
        <Text
          style={{
            color: 'white',
            fontSize: 38,
            fontWeight: 'bold',
          }}>
          About Us
        </Text>
      
        </View>
      
        <ScrollView
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 20,
            paddingLeft: 60,
          }}>
        
          <View style={{paddingTop: 30, paddingBottom: 50}}>
          
           
          </View>
          <View style={{width: 280}}>
          
          </View>
        </ScrollView>

      </Background>
    </View>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    backgroundColor: 'white',
    bottom: 40,
  },
  inputUserName: {
    height: 40,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: '#000',
  },
  inputPassword: {
    height: 40,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    color: '#000',
  },
  buttonStyle: {
    margin: 80,
    padding: 20,
    borderRadius: 5,
    color: '#000',
  },
  mainComp: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    position: 'relative',
  },
});

export default AboutUs
