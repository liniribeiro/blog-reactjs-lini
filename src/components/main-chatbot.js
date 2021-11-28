import React, { useState, useCallback } from 'react';

import messenderImg from '../assets/img/chatbot/messenger.png'
import '../assets/css/bot-style.css'

import Widget from './chatbot-widget/widget'



// const USERID_STORAGE_KEY = "simple-chatroom-cid";


const FloatChatButton = (props) => {
  const {isToggled, onClick} = props

  let widget_class = isToggled ? "profile_div isToggled" : "profile_div isNotToggled";

  return (
    <div className={widget_class} id="profile_div">
      <img className="imgProfile" src={messenderImg} alt='' onClick={onClick}/>
    </div>
  )
}


const MainChatbot = () => {
  const [messages, setMessages] = useState([])
  const [widgetToggled, setwidgetToggled] = useState(false)


  const changeToggle = useCallback(() => {
    setwidgetToggled(!widgetToggled)
  }, [widgetToggled])

  const sendMessage = (message) => {
    setMessages(messages => [...messages, message])
  }

  return (
    <div className="container">         
    <Widget 
      isToggled={widgetToggled}
      onClose={changeToggle}
      sendMessage={sendMessage}
      chatMessages={messages}
    />

    <FloatChatButton 
    isToggled={!widgetToggled} 
    onClick={changeToggle}/>
    </div> 
  )
}

export default MainChatbot



// essionUserId = window.sessionStorage.getItem(USERID_STORAGE_KEY);
// isNewSession = sessionUserId == null;
//   if (isNewSession) {
//     sessionUserId = "1234";
//     window.sessionStorage.setItem(USERID_STORAGE_KEY, sessionUserId);
//   }