import React from 'react';
import {View, ImageBackground} from 'react-native';
import Images from '../config/Images';

const Background = ({children}) => {
    return(
        <View>
        <ImageBackground
          source={Images.BG}
          style={{
            flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 16,
            position: 'relative',
          }}>
          <View>{children}</View>
        </ImageBackground>
      </View>
    )
 
};

export default Background;
