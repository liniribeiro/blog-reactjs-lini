import React, {Component} from 'react'
import Page from '../components/page';
import headerImage from '../assets/img/chatbot/kiki-bot.png'

class Kiki extends Component {
    render(){
        return (
            <div className='container-md main-container'>
            <Page 
            title='KIKI' 
            short_description="O primeiro chatbot da Alini"
            header_img={headerImage}
            class_image='page-img-small'
            />  
        </div>        
        )
    }

};
  
export default Kiki;
  
