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
  TouchableOpacity,
} from 'react-native';

// import {TextInput, HelperText} from 'react-native-paper';

import {colors} from '../../../config/styles';
import {AppBar} from '../../../components/AppBar';
import {GET_LOGIN_OK} from './LoginActionTypes';
import {connect} from 'react-redux';

import Images from '../../../config/Images';
import TextInputField from '../../../components/TextInputField';
import {Button} from '../../../components/Button';
import Background from '../../../components/Background';

const {width, height} = Dimensions.get('window');

const Login = props => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isDisableButton, setIsDisableButton] = useState(true);

  const setUser = () => {
    setConfig();
  };

  const getUser = () => {
    console.log(getConfig());
  };

  const emailValidation = username => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === true) {
      console.log('valid');
      setIsValidEmail(true);
    } else {
      console.log('invalid');
      setIsValidEmail(false);
    }
  };

  const emailValidationTextChange = email => {
    setEmail(email);
  };


  const passwordValidation = password => {
       if(password!=''){
        setIsValidPassword(true)
       }else{
        setIsValidPassword(false)
       }
  };

  const passwordValidationTextChange = email => {
    setPassword(email);
  };

  useEffect(() => {
    console.log('loginStatus');
    if (props.loginStatus != null || props.loginStatus != undefined) {
      if (props?.loginStatus == true) {
      //  props.navigation.navigate('Home');
      }
    }
  }, [props.loginStatus]);

  const clickLogin = () => {
   props.changeLoginStatus(true);
    //props.navigation.navigate('Home');
  };

  useEffect(() => {
   console.log("eail",email)
   console.log(password)
   console.log(isValidEmail)
   console.log(isValidPassword)

     if(email!='' && password!='' && isValidEmail==true && isValidPassword ==true){
      setIsDisableButton(false)
     }else{
      setIsDisableButton(true)
     }
  }, [email,password, isValidEmail, isValidPassword]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center', width: 460}}>
        <Background
          source={Images.BG}
          resizeMode="cover"
          style={styles.mainComp}>
          <Text
            style={{
              color: 'white',
              fontSize: 54,
              fontWeight: 'bold',
              marginVertical: 10,
              paddingLeft: 30,
              paddingBottom: 20,
            }}>
            Login
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              paddingTop: 100,
              paddingLeft: 60,
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: colors.blackColor,
              }}>
              Welcome Back
            </Text>
            <Text style={{color: colors.blackColor}}>
              Login to your account
            </Text>
            <View style={{paddingTop: 30, paddingBottom: 50}}>
              <TextInputField
                placeholder="Email"
                onChangeText={text => emailValidationTextChange(text)}
                onSubmitEditing={event =>
                  emailValidation(event.nativeEvent.text)
                }></TextInputField>
              {isValidEmail == false ? (
                <Text style={{color: colors.red, paddingBottom: 15}}>
                  {' '}
                  * Please enter valid Email
                </Text>
              ) : null}

              <TextInputField placeholder="Password"  onChangeText={text => passwordValidationTextChange(text)}
                onSubmitEditing={event =>
                  passwordValidation(event.nativeEvent.text)
                } secureTextEntry={true}></TextInputField>
              {isValidPassword == false ? (
                <Text style={{color: colors.red, paddingBottom: 15}}>
                  {' '}
                  * Please enter  Password
                </Text>
              ) : null}
            </View>
            <View style={{width: 280}}>
              <Button
                buttonStyle={{backgroundColor: isDisableButton ?'#777':colors.primaryColor1}}
                onPressBtn={() => clickLogin()}
                addText={'Login'}
                disabled={isDisableButton}
              />

              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: 20,
                }}>
                <Text style={{fontSize: 16, color: colors.blackColor}}>
                  Dont have an account{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('register');
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: colors.blackColor,
                    }}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
    paddingVertical: 40,
    paddingHorizontal: 16,
    position: 'relative',
  },
});

const mapStateToProps = (state, props) => {
  return {
    loginStatus: state.login.loginStatus,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    changeLoginStatus: loginBody => {
      dispatch({type: GET_LOGIN_OK, payload: true});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
