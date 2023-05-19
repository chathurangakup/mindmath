import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../config/styles';
// import Images from '../config/Images';

export const AppBar = props => {


  return (
    <View style={styles.root}>
      <View
        style={{alignContent:'center', justifyContent:'center', flex:1}}>
      </View>
      <View style={{alignContent:'center'}}>
        <Text style={styles.titleStyles}>{props.title}</Text>
      </View>
    </View>
  );
};

AppBar.defaultProps = {
  isShowBack: true,
  isShowProfile: true,
};

const styles = StyleSheet.create({
 
  titleStyles: {
    color: colors.blackColor,
    fontSize: 23,
    padding: 20,
    fontWeight: 'bold',
  },
  bckBtnStyles: {
    borderRadius: 50,
    width: 50,
    height: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  root: {
    backgroundColor: 'transparent',
    
    // position: 'absolute',
    // zIndex: 9999,
  },
 
});
