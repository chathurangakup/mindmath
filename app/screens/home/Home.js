import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {AppBar} from '../../components/AppBar';

import {colors} from '../../config/styles';
import Images from '../../config/Images';

const {width, height} = Dimensions.get('window');




const Home = props => {

  const subjectData =[
    {image: Images.ImageCapture,
    subjectName:'Math Scanner',
    subjectSubName:'Image',
     press: () => props.navigation.navigate('Math_Scanner')
   },
   {image: Images.AugmentedReality,
    subjectName:'AR Math Solver',
    subjectSubName:'Image',
    press: () => props.navigation.navigate('AR_Math_Solver')
   },
   {image: Images.Chat,
    subjectName:'Algebraic Assistant ',
    subjectSubName:'Image',
    press: () => props.navigation.navigate('Algebraic_Assistant')
   },
   
  ]

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

  return (
    <View style={{flex: 1}}>
      <AppBar
        navigation={props.navigation}
        title={'Home'}
        isShowBack={false}
        isShowHamberger={true}
        isShowProfile={false}
      />
      <View style={styles.header}>
        <Image source={Images.Splash} style={styles.imgStyles} />
      </View>

      <View>
        <FlatList
          data={subjectData}
          style={{paddingHorizontal: 20, marginTop: -60, marginBottom: 80}}
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // keyExtractor={item=> item.value}
          renderItem={item => <SubjectItem subjects={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, position: 'relative'},
  header: {
    width: '100%',
    height: height / 2.5,
    padding: 30,
    backgroundColor: colors.blackColor,
    position: 'relative',
  },
  imgStyles: {
    position: 'absolute',
    opacity: 1,
    top: 60,
    left: 90,
    borderRadius: 200,
    width: 200,
    height: 200,
  },
  subjectItemImgStyle: {
    width: width / 2.2,
    height: height / 5,
    borderRadius: 10,
  },
  subjectItemBtn: {
    backgroundColor: colors.blackColor,
    margin: 10,
    width: width / 2.2,
    height: height / 3.5,
    borderRadius: 10,
    // padding: 15,
    shadow: '#9e9808',
    elevation: 5,
  },
  subjName:{
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    paddingTop:20,
    fontWeight:'bold',
  }
  
});

export default Home;
