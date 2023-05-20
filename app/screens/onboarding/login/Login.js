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
import {GET_LOGIN} from './LoginActionTypes';
import {connect} from 'react-redux';

import Images from '../../../config/Images';
import TextInputField from '../../../components/TextInputField';
import {Button} from '../../../components/Button';
import Background from '../../../components/Background';

const {width, height} = Dimensions.get('window');

const Login = props => {
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const setUser = () => {
    setConfig();
  };

  const getUser = () => {
    console.log(getConfig());
  };

  useEffect(() => {
    console.log('loginStatus');
    if (props.loginStatus != null || props.loginStatus != undefined) {
      if (props?.loginStatus?.data?.login == true) {
        props.navigation.navigate('home');
      }
    }
  }, [props.loginStatus]);

  const clickLogin = () => {
    props.navigation.navigate('home')
  };

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
            <Text style={{fontSize: 40, fontWeight: 'bold'}}>Welcome Back</Text>
            <Text>Login to your account</Text>
            <View style={{paddingTop: 30, paddingBottom: 50}}>
              <TextInputField placeholder="Email/Username"></TextInputField>
              <TextInputField placeholder="Password"></TextInputField>
            </View>
            <View style={{width: 280}}>
              <Button
                buttonStyle={{color: colors.primaryColor1}}
                onPressBtn={() => clickLogin()}
                addText={'Login'}
              />

              <View
                style={{
                  flexDirection: 'row',
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: 20
                }}>
                <Text style={{fontSize: 16}}>Dont have an account </Text>
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
    getLoginStatus: loginBody => {
      dispatch({type: GET_LOGIN, payload: loginBody});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
