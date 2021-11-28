
const sendRasaPost = async (message, sendMessage) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message:  message, sender: 123 })
    };
  
    try {
      const response = await fetch('https://kiki-assistant.herokuapp.com/webhooks/rest/webhook', requestOptions);
      const data = await response.json();  
  
      return data
  
    } catch (error) {
      console.error(error)
    }
  }