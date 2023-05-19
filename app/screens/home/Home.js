import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  Platform,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';

import {colors} from '../../config/styles';
import Images from '../../config/Images';
import {AppBar} from '../../components/AppBar';



const {width, height} = Dimensions.get('window');

const Home = props => {
  const [image, setImage] = useState('');
  const [imagePath, setImagePath] = useState(Images.Profile);
  const [imageFileName, setImageFileName] = useState('');

  const setUser = () => {
    setConfig();
  };

  const getPlatformPath = response => {
    return Platform.select({
      android: {value: response.assets[0].uri},
      ios: {value: response.assets[0].uri},
    });
  };

    /**
   * Get the file name and handle the invalid null case
   */
    const getFileName = (name, path) => {
      console.log(name + path + 'hhhhhh');
      if (name != null) {
        return name;
      }
  
      // if (Platform.OS === "ios") {
      //     path = "~" + path.substring(path.indexOf("/Documents"));
      // }
      return path.split('/').pop();
    };

  const getPlatformURI = imagePath => {
    let imgSource = imagePath;

    console.log('imagePath', isNaN(imagePath));
    if (isNaN(imagePath)) {
      imgSource = {uri: imagePath};
      if (Platform.OS == 'android') {
        imgSource.uri = imgSource.uri;
      }
    } else {
      if (image !== '') {
        imgSource = {uri: image};
        if (Platform.OS == 'android') {
          imgSource.uri = imgSource.uri;
        }
      } else {
        imgSource = Images.Profile;
      }
    }
    return imgSource;
  };

  let imgSource = getPlatformURI(imagePath);

  const chooseLib = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true, // do not backup to iCloud
        path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
       
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let path = getPlatformPath(response).value;
        let fileName = getFileName(response.fileName, path);
        setImagePath(path);
        setImageFileName(fileName);
        console.log(fileName);
        // getUrl(path, fileName);
      }
    });
  };

  const chooseCamera = () => {
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true, // do not backup to iCloud
        path: 'images', // store camera images under Pictures/images for android and Documents/images for iOS
      },
    };
    launchCamera(options, response => {
      if (response.didCancel) {
   
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let path = getPlatformPath(response).value;
        let fileName = getFileName(response.fileName, path);
        setImagePath(path);
        setImageFileName(fileName);
        // getUrl(path, fileName);
      }
    });
  };

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff'}}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.bottomView}>
        <AppBar
          navigation={props.navigation}
          title={'Home'}
          isShowBack={false}
        />
        <View style={{paddingTop: 40, paddingLeft: 40, paddingBottom: 20}}>
          <View style={{alignItems: 'center', marginTop: 40}}>
            <TouchableOpacity>
              <Image style={styles.image} source={imgSource} />
            </TouchableOpacity>

            <View style={styles.eightyWidthStyle}>
              <TouchableOpacity
                onPress={chooseCamera}
                style={styles.camOrlibStyles}>
                <Text style={styles.camOrlibTextStyles}> Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={chooseLib}
                style={styles.camOrlibStyles}>
                <Text style={styles.camOrlibTextStyles}>Library</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Text style={{color:'black'}}>Name: </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bottomView: {
    backgroundColor: 'white',
  },
  eightyWidthStyle: {
    flexDirection: 'row',
    width: '80%',
    marginBottom: 10,
    justifyContent: 'center',
  },
  camOrlibStyles: {
    height: 30,
    backgroundColor: colors.secondaryColor2,
    margin: 10,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2,
  },
});

const mapStateToProps = (state, props) => {
  return {
    loginStatus: state.login.loginStatus,
  };
};

export default connect(mapStateToProps)(Home);
