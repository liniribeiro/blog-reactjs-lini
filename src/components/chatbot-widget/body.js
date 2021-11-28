import userImage from '../../assets/img/chatbot/user-cat.png'
import BotMessage from './rasa_answer'

  
  const UserMessage = ({message})=> {
    return (
  
    <div>
      <img className="userAvatar" src={userImage} alt=""/>
      <p className="userMsg">{message}</p>
      <div className="clearfix"></div>
    </div>
    ) 
  }
  
  const WidgetChats = ({chatMessages}) => {
    const rows = chatMessages.map((row, list_index) => {
      if (row.event === 'user'){
        return (<UserMessage key={list_index} message={row.message}/>)
      } else {  
        return (<BotMessage key={list_index} message={row.message}/>)
      }}
    )
    return(<div> {rows}</div>)
  }
  
  
  const WidgetBody = ({chatMessages}) => {
  
    return (
    <div className="chats" id="chats">
      <div className="clearfix"></div>
  
      <WidgetChats chatMessages={chatMessages}/>
    </div>
    )
  }

  export default WidgetBody