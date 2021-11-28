import React, {Component} from 'react'
import Page from '../components/page';
import headerImage from '../assets/img/about/alini.png'
import programsImage from '../assets/img/about/programs.png'
import imageSkills from '../assets/img/about/skills.png'
import imageGirl from '../assets/img/about/girl.png'


const PageBody = () => {
    return (
        <div>
            <section>
                <p>
                Sou Desenvolvedora de Software há 7 anos e sou realmente apaixonada pelo que faço! Adoro resolver problemas e compartilhar conhecimento.
                </p>
                <img className="img-principal" src={programsImage} alt="Alini Programs" />  
                <p>A louca do K-POP e maratonista de Doramas. Uso este espaço para compartilhar o que aprendo e me distrair ♡.</p>   
                <p> Com o objetivo de apoiar, incentivar e cada vez trazer mais mulheres para a tecnologia, sempre que possível, participo de projetos que compartilham do mesmo propósito que o meu. Co-criadora e mentora do Maria vai com as Dev's, Co-organizadora do Pyladies Blumenau e membra da comunidade Python, sempre buscando conhecer e compartilhar histórias.</p>
                <p><b>Participei de uma talk com o objetivo de contar a minha trajetória na área do desenvolvimento e incentivar mais pessoas a entrarem a área:</b></p>
            </section>
            <div className="video-content">
            <iframe width="100%" height="315"
                src="https://www.youtube.com/embed/RhIj1Js6v7s?start=2367&end=2993" 
                frameBorder="0" 
                alt=""
                title="assa"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen></iframe>
            </div>
            <br />
            <section>
            <h4><b>No decorrer destes anos pude participar de projetos com vários propósitos: </b></h4>
            <div>
            <ul className="albums-list">
            <img className="img-principal" src={imageGirl} alt=""/>
            <li className="items">Projeto de envio de Pulsos, para realizar a pesquisa de clima organizacional;</li>
            <li className="items">Projeto de Remuneração, que ajudava os gestores e time de RH na tomada de decisão;</li>
            <li className="items">Projeto de reestruturação dos produtos, apresentando os dados Analytics de uma forma unificada para todos os usuários;</li>
            <li className="items">Projetos de integração de parceiros na platadorma do Limpa Nome, da Serasa;</li>
            <li className="items">Construção de chatbots que se ligam com o Dialog Flow, utilizando Blip como Plataforma;</li>
            <li className="items">Construção de um orquestrador de mensagens que escolhe e envia a mensagem para o canal alvo (Email, SMS e Push) um processo de alta volumetria com + de 2kk de mensagens trafegadas na aplicação por dia;</li>
            <li className="items">Automação de ativações CRM, também um processo de alta volumetria com + de 1kk de mensagens trafegadas na aplicação por dia;</li>
            <li className="items">Aplicação que gera relatórios performáticos em base de dados colossal.</li>
            </ul>
            <p>Em todos meus projetos tenho o objetivo de construir um software com um design de fácil leitura, com qualidade e fazer entregas relevantes e funcionais.</p>
            </div>
            <br />
            <div className='tecnologies'>
                <h4>
                <b>Tecnologias</b>
                </h4>
            <img src={imageSkills} alt="Alini Programs" className="full-img"/>
            </div>
            </section>
        </div>     
    );
}

class About extends Component { 
    render(){
        return (
            <div className='container-md main-container'>
                <Page 
                title='Sobre a Lini' 
                short_description="Olá, sou a Alini!"
                header_img={headerImage}
                class_image='page-img-small'
                />
                <PageBody />    
            </div>           
        )
    }

};
  
export default About;
  
