import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

import Images from '../../config/Images';
import {colors, fontWeights} from '../../config/styles';
import Background from '../../components/Background';
import {Button} from '../../components/Button';

const {width, height} = Dimensions.get('window');

const LoginorSignup = props => {
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   props.navigation.navigate('login');
    // }, 3000);
    // return () => clearInterval(timer);
  }, []);

  const clickLogin = () =>{
    props.navigation.navigate('login')
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={Images.BG}
        resizeMode="cover"
        style={styles.mainComp}>
        <View
          style={styles.imageBgStyle}>
          <Image style={styles.tinyLogo} source={Images.Splash} />
        </View>
        <View>
          <Text style={styles.textStyle}>Please click Login or Sign Up</Text>
        </View>
        <View>
          <Button
            buttonStyle={{color: colors.primaryColor1}}
            onPressBtn={() => clickLogin()}
            addText={'Login'}
          />
          <View style={{padding: 20}}></View>
          <Button
            buttonStyle={{
              backgroundColor: 'none',
              borderColor: colors.primaryColor1,
              borderWidth: 2,
            }}
            onPressBtn={() => clickLogin()}
            addText={'SignUp'}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {color: colors.white, paddingTop: 70,paddingLeft: 15,paddingBottom: 40, fontWeight: fontWeights.semiMedium, fontSize: 18},
  mainComp: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 16,
    position: 'relative',
  },
  tinyLogo: {
    width: width / 1.3,
    height: height / 3,
  },
  imageBgStyle:{
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  }
});

const mapStateToProps = state => {
  return {
    // isLoggedIn: state.common.isLoggedIn,
  };
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginorSignup);
