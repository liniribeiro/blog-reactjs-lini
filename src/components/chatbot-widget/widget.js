import WidgetBody from './body'
import WidgetHeader from './header'
import WidgetMessage from './messages-input'


const Widget = (props) => {
    const {isToggled, onClose,
       sendMessage, chatMessages} = props
  
    let widget_class = isToggled ? "widget isToggled" : "widget isNotToggled";
  
    return (
      <div className={widget_class}>
        <WidgetHeader onClose={onClose}/>
        <WidgetBody chatMessages={chatMessages}/>
        <WidgetMessage
        sendMessage={sendMessage}
        />
      </div>
    )
  }
  
  export default Widget