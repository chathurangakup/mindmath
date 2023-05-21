import React from 'react';
import {View, Text,ImageBackground, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {connect} from 'react-redux';

import Images from '../config/Images';

import Iconsicons from 'react-native-vector-icons/Ionicons';
import {GET_LOGIN_OK} from '../screens/onboarding/login/LoginActionTypes';
import { colors } from '../config/styles';


const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#8200d6'}}>
        <ImageBackground source={Images.BackgrounDdrawer} style={{padding:30}}>
            <Image source={Images.Avatar} style={{height:80,width:80,borderRadius:40, marginBottom:10}}></Image>
            <Text style={{color:'#fff',fontSize: 18}}>Jhone Doe</Text>
        </ImageBackground>
        <View style={{flex:1,backgroundColor:'#fff',paddingTop: 10}}>
           <DrawerItemList {...props} />
        </View>
      
      </DrawerContentScrollView>
      <View style={{padding:20, borderTopWidth:1,borderTopColor:"#ccc"}}>
      <TouchableOpacity onPress={()=>{props.changeLoginStatus(false)}} style={{paddingVertical:15}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <Iconsicons size={22} name="exit-outline" style={{color:colors.blackColor}}/>
          <Text style={{color:colors.blackColor, fontSize:15, marginLeft:5}}>Sign Out</Text>
        </View>
      </TouchableOpacity>
      
      </View>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return {
    loginStatus: state.login.loginStatus,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    changeLoginStatus: loginBody => {
      dispatch({type: GET_LOGIN_OK, payload: loginBody});
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomDrawer);
