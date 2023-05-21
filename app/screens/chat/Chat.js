import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat,LeftAction, ChatInput, SendButton,Bubble} from 'react-native-gifted-chat';
import {View,StyleSheet} from 'react-native';

import {AppBar} from '../../components/AppBar';
import { colors } from '../../config/styles';
import {
    renderAvatar,
    renderBubble,
    renderSystemMessage,
    renderMessage,
    renderMessageText,
    renderCustomView,
  } from './MessageContainer';
  import { renderInputToolbar, renderActions, renderComposer, renderSend } from './InputToolbar';


const Chat = (props) => {
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);
  
   let i = 1;
  
 

  useEffect(() => {
    setMessages([
      {
        _id: i,
        text: 'Welcome to agumented Reality',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      
    ]);
  }, []);

 
  const onSend = useCallback((messages = []) => {
    console.log(messages)

    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
   

    seletReply()
   
   
  }, []);

  const seletReply =() =>{
    let obj=  [{"_id": Math.floor(Math.random() * 1000) + 1 , "createdAt": new Date(), "text": "This Feature not available", "user": {"_id": 2,  name: 'React Native',
    avatar: 'https://placeimg.com/140/140/any',}}]

    setTimeout(() => { setMessages(previousMessages =>
      GiftedChat.append(previousMessages, obj),
    );}, 1000)
  }


  return (
    <View style={{flex:1, paddingTop: 20}}>
      <AppBar
        navigation={props.navigation}
        title={'Algebraic Assistant'}
        appBarColor={colors.blackColor}
        isShowHamberger={true}
        isShowProfile={false}
        testStyleHeaderColor={{color:colors.white,fontSize:30}}
        textColor={colors.white}

      />
        <View style={{flex:1, paddingTop: 30}}>
        <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                  _id: 1,
                }}
                minInputToolbarHeight={70}
                renderInputToolbar={renderInputToolbar}
              // renderActions={renderActions}
              renderComposer={renderComposer}
        
              />
        </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
  
     
    },
    
  });
  

export default Chat;
