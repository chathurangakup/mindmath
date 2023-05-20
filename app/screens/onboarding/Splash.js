import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

import Images from '../../config/Images';
import {colors} from '../../config/styles';
import Background from '../../components/Background';


const {width,height} = Dimensions.get('window');

const Splash = props => {

    useEffect(()=>{
        const timer = setTimeout(() => {
                props.navigation.navigate('loginorsignup')
        
          }, 3000);
      
          return () => clearInterval(timer);
    },[])
 


  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={Images.BG}
        resizeMode="cover"
        style={styles.mainComp}>
        <View style={{alignContent:'center',justifyContent:'center', alignItems:'center', paddingTop:60}}>
            <Image
            style={styles.tinyLogo}
            source={Images.Splash}
            />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainComp: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    position: 'relative',
  },
  tinyLogo: {
    width: width/1.2,
    height: height/2,
  },
});

const mapStateToProps = state => {
  return {
   // isLoggedIn: state.common.isLoggedIn,
  };
};

function mapDispatchToProps(dispatch) {
  return {
   
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
