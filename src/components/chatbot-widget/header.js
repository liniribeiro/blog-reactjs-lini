import iconImg from '../../assets/img/icon-alini.png'

const WidgetHeader = (props) => {
    const {onClose} = props
    return (
        <nav className="navbar navbar-expand-md chat_header">
          <div className="mx-auto order-0 chat_header_title">
            <img className="chat_icon" src={iconImg} alt='bot-messenger'/>
              <p className="navbar-brand mx-auto">KIKI</p>   
          </div>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 widget_button">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                  <i onClick={onClose} className="fas fa-times"></i>
                  </li>
              </ul>
          </div>
      </nav>
    )
  }
  
  export default WidgetHeader