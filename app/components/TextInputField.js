import React from 'react';
import {View, TextInput} from 'react-native';
import Images from '../config/Images';
import {colors} from '../config/styles';

const TextInputField = props => {
  return (
    <TextInput
      {...props}
      placeholderTextColor={colors.gray}
      style={{
        borderRadius: 100,
        color: colors.blackColor,
        paddingHorizontal: 20,
        width: '70%',
        backgroundColor: 'rgb(220,220,220)',
        marginVertical: 10,
        height: 40
       
      }} ></TextInput>
  );
};

export default TextInputField;
