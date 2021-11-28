import botImage from '../../assets/img/chatbot/kiki3.png'

const BotMessage = ({message}) => {
    return (
      <div>
        <img className="botAvatar" src={botImage} alt=""/>
        <p className="botMsg">{message}</p>
        <div className="clearfix"></div>
      </div>
    )
  }

  export default BotMessage