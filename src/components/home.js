import React, {Component} from 'react'
import Page from '../components/page';
import headerImage from '../assets/img/react-logo.png'


class Home extends Component {
    render(){
        return (
            <div className='container-md main-container'>
            <Page 
            title='Bem vindo!' 
            short_description="Este projeto foi construído para estudar o framework react.js"
            header_img={headerImage}
            class_image='page-img-small'
            /> 
        </div>        
        )
    }

};
  
export default Home;