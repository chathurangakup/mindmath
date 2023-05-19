import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

// import {TextInput, HelperText} from 'react-native-paper';

import {colors} from '../../config/styles';
import {AppBar} from '../../components/AppBar';
import {GET_LOGIN} from './LoginActionTypes';
import {connect} from 'react-redux';


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
    console.log('loginStatus', );
    if(props.loginStatus!=null || props.loginStatus!=undefined){
        if(props?.loginStatus?.data?.login==true){
          props.navigation.navigate('home')
        }
    }

  }, [props.loginStatus]);

  const clickLoginButton = () => {
    if(userName!='' || password!=''){
      let params = {
        username: userName,
        password: password,
      };
      console.log(params)
      props.getLoginStatus(params)
    }else{
alert('kiki')
    }
   
  }

  return (
    <ScrollView
      style={{backgroundColor: '#fff'}}
      showsHorizontalScrollIndicator={false}>
      <AppBar
        navigation={props.navigation}
        title={'Awsome App'}
        isShowBack={false}
      />

      <View style={{paddingTop: 40, paddingBottom: 20}}>
        <TextInput
          style={styles.inputUserName}
          onChangeText={setUserName}
          value={userName}
          placeholder="User Name"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.inputPassword}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          keyboardType="default"
          placeholderTextColor="#000"
        />
        <View style={styles.buttonStyle}>
          <Button
            onPress={() => clickLoginButton()}
            title="Login"
            color="#841584"

            //  accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </ScrollView>
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
