import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {colors} from '../../config/styles';

import Images from '../../config/Images';
import TextInputField from '../../components/TextInputField';
import {Button} from '../../components/Button';
import Background from '../../components/Background';
import {AppBar} from '../../components/AppBar';

const {width, height} = Dimensions.get('window');

const ImageUpload = props => {
  const [image, setImage] = useState('');
  const [imagePath, setImagePath] = useState(null);
  const [imageFileName, setImageFileName] = useState('');

  const imgDataList = [
    {
      image: Images.Camera,
      subjectName: 'Choose Camara',
      subjectSubName: 'Image',
      value: 1,
      press: () => chooseCamera(),
    },
    {
      image: Images.Gallary,
      subjectName: 'Choose Gallery',
      subjectSubName: 'Image',
      value: 2,
      press: () => chooseLib(),
    },
  ];

  const SubjectItem = ({subjects}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.0}
        onPress={subjects.item.press}
        style={styles.subjectItemBtn}>
        <Image
          style={styles.subjectItemImgStyle}
          source={subjects.item.image}
        />
        <Text style={styles.subjName}>{subjects.item.subjectName}</Text>
        {/* <Text style={styles.subjSubName}>{subjects.item.subjectSubName}</Text> */}
      </TouchableOpacity>
    );
  };

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
        imgSource = null;
      }
    }
    return imgSource;
  };

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

  let imgSource = getPlatformURI(imagePath);
  console.log(imgSource)

  const clearImage =()=>{
    getPlatformURI(null)
    setImagePath(null);
    setImageFileName(null);
  }

  return (
    <SafeAreaView>
      <View style={{alignItems: 'center', width: 460}}>
        <AppBar
          navigation={props.navigation}
          title={''}
          isShowBack={false}
          isShowHamberger={true}
          isShowProfile={false}
        />
        <Background
          source={Images.BG}
          resizeMode="cover"
          style={styles.mainComp}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 60,
              paddingBottom: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              Math Scanner
            </Text>
          </View>

          <View
            style={{
              backgroundColor: 'white',
              height: 700,
              width: 460,
              borderTopLeftRadius: 130,
              paddingTop: 20,
            }}>
            <View style={{paddingTop: 30, paddingBottom: 50}}></View>
            <View style={{width: 380}}>
              <View style={{paddingTop: 40, paddingBottom: 20}}>
                <View style={{marginTop: 3}}>
                {imgSource==null?  <FlatList
                    data={imgDataList}
                    style={{
                      paddingHorizontal: 20,
                      marginTop: -60,
                      marginBottom: 80,
                    }}
                    contentContainerStyle={{alignItems: 'center'}}
                    showsVerticalScrollIndicator={false}
                    numColumns={1}
                    keyExtractor={item => item.value}
                    renderItem={item => <SubjectItem subjects={item} />}
                  />:  
                  <View style={{alignContent:'center',justifyContent:"center",alignItems:'center'}}>
                      <Image style={styles.image} source={imgSource} />
                      <Text style={{color:colors.blackColor, padding:10}}>This is demo answer</Text>
                      <TouchableOpacity onPress={()=> clearImage()}>
                         <Text style={{color:colors.red, padding:10}}>Clear Image</Text>
                      </TouchableOpacity>
                  </View>

                }
              
                 
                </View>
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
  image: {
    color: 'black',
    width: width / 1.5,
    height: height / 2,
  
  },

  buttonStyle: {
    margin: 80,
    padding: 20,
    borderRadius: 5,
    color: '#000',
  },
  mainComp: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    position: 'relative',
  },
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

  subjectItemImgStyle: {
    width: width / 2.5,
    height: height / 5,
    borderRadius: 10,
  },
  subjectItemBtn: {
    backgroundColor: colors.blackColor,
    margin: 10,
    width: width / 2.5,
    height: height / 3.5,
    borderRadius: 10,
    // padding: 15,
    shadow: '#9e9808',
    elevation: 5,
  },
  subjName: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 20,
    fontWeight: 'bold',
  },
});

export default ImageUpload;
