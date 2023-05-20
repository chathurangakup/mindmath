import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity
} from 'react-native';

// import {TextInput, HelperText} from 'react-native-paper';

import {colors} from '../../../config/styles';
import {GET_REGISTER} from './RegisterActionTypes';
import {connect} from 'react-redux';

import Images from '../../../config/Images';
import TextInputField from '../../../components/TextInputField';
import {Button} from '../../../components/Button';
import Background from '../../../components/Background';

const {width, height} = Dimensions.get('window');

const Login = props => {
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');




  const clickLoginButton = () => {

  };

  return (

    <SafeAreaView>
   
    <View style={{alignItems: 'center', width: 460}}>
      <Background
        source={Images.BG}
        resizeMode="cover"
        style={styles.mainComp}>
        <View style={{justifyContent:'center',alignItems:'center',paddingRight:60, paddingBottom: 20}}>
        <Text
          style={{
            color: 'white',
            fontSize: 48,
            fontWeight: 'bold',
           
           
          
          }}>
          REGISTER
        </Text>
        <Text style={{color:'white'}}>Create a new account</Text>
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
            <TextInputField placeholder="First Name"></TextInputField>
            <TextInputField placeholder="Last Name"></TextInputField>
            <TextInputField placeholder="Email/Username"></TextInputField>
            <TextInputField placeholder="Contact Number"></TextInputField>
            <TextInputField placeholder="Password"></TextInputField>
            <TextInputField placeholder="Confirm Password"></TextInputField>
          </View>
          <View style={{width: 280}}>
            <Button
              buttonStyle={{color: colors.primaryColor1}}
              onPressBtn={() => clickLogin()}
              addText={'Sign Up'}
            />

            <View
              style={{
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 20
              }}>
              <Text style={{fontSize: 16}}>Already have an account </Text>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('login');
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: colors.blackColor,
                  }}>
                 Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

      </Background>
    </View>
  </SafeAreaView>
  );
};

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

const mapStateToProps = (state, props) => {
  return {
   
  };
};

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
