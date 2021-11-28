import React, { useState, useCallback } from 'react';

const sendRasaPost = async (message, sendMessage) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message:  message, sender: 123 })
    };
  
    try {
      const response = await fetch('https://kiki-assistant.herokuapp.com/webhooks/rest/webhook', requestOptions);
      const data = await response.json();  
  
      await new Promise((resolve) => setTimeout(resolve, 3000));
  
      console.log(data[0])
      for (var i = 0; i < data.length; i++) {
        sendMessage({
          message: data[i].text,
          event: 'bot'
        })
      }
  
    } catch (error) {
      console.error(error)
    }
  }

const WidgetMessage = ({sendMessage}) => {
    // Recebe o objeto e o método que altera o valor do objeto
    const [message, setMessage] = useState('')
  
    // useCallback cacheia a função e se atualiza quando os elementos
    // passados na última propriedade, alteram de estado.
    const submitMessage = useCallback(() => {
      sendMessage({ 
        message: message,
        event: 'user'
      })
  
      sendRasaPost(message, sendMessage)
  
      setMessage('') 
    }, [message, sendMessage]);
  
  
    const handleChange = useCallback((event) => {
      const received_message = event.target.value
      setMessage(received_message)
    }, [])
  
  
    const handleKeyPress = useCallback((event) => {
      if(event.key === 'Enter'){
        submitMessage()
      }
    }, [submitMessage])
  
    return (
      <nav className="navbar navbar-expand-md keypad">
        <div className="navbar-left">
          <input
              type="text"
              className="usrInput"
              name="received_message"
              id="userInput"
              autoComplete="off"
              placeholder="Escreva uma mensagem..."
              onChange={handleChange} 
              onKeyPress={handleKeyPress} 
              value={message}/>
        </div>
        <div className="send_button">
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <i 
                onClick={submitMessage}
                className="fa fa-paper-plane">
                </i>
              </li>
          </ul>
        </div>
      </nav>
    )
  }
  

export default WidgetMessage