import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';

import {colors} from '../config/styles';
import Images from '../config/Images';

export const AppBar = props => {
  const _clickHamberger = () => {
    props.navigation.openDrawer();
  };

  const onPressProfile = () => {
    props.navigation.navigate('profileMain');
  };

  return (
    <View style={[styles.root, props.appBarColor
      ? {backgroundColor: props.appBarColor }
      : {backgroundColor: 'transparent'},]}>
      <View
        style={[
          styles.bckBtnStyles,
          props.isShowBack
            ? {backgroundColor: colors.blackColor }
            : {backgroundColor: 'transparent'},
        ]}>
        {props.isShowBack == false ? null : (
          <TouchableOpacity onPress={() => _backHandler()}>
            <Icon
              name="keyboard-backspace"
              size={30}
              color={props.textColor? colors.blackColor:props.textColor }
            />
          </TouchableOpacity>
        )}
        {props.isShowHamberger == false ? null : (
          <TouchableOpacity onPress={() => _clickHamberger()}>
            <IconEntypo
              name="menu"
              size={40}
              color={props.textColor? props.textColor: props.white }
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={{flex: 5, alignItems: 'center',paddingTop:10}}>
        <Text style={[styles.titleStyles, props.testStyleHeaderColor]}>{props.title}</Text>
      </View>
      <View
        style={[
          styles.profileStyle,
          props.isShowProfile
            ? {backgroundColor: props.textColor? colors.white:props.textColor }
            : {backgroundColor: 'transparent'},
        ]}>
        {props.isShowProfile ? (
          <TouchableOpacity onPress={() => onPressProfile()}>
            <Image
              style={styles.image}
              source={
                props.profilePicImage == null
                  ? Images.ProfilePic
                  : {uri: props.profilePicImage}
              }
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

AppBar.defaultProps = {
  profilePicImage: null,
  isShowBack: true,
  isShowProfile: true,
};

const styles = StyleSheet.create({
  profileStyle: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: colors.blackColor,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  titleStyles: {
    color: colors.white,
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
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 9999,
  },
  image: {
    color: 'black',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
