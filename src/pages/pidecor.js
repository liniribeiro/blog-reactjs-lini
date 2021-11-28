import React, { Component } from "react";
import headerImage from "../assets/img/pidecor/pidecor.png";
import Page from "../components/page";

import imageTcc from "../assets/img/pidecor/tcc1.png";
import imageWindow from "../assets/img/pidecor/window.png";
import imageDog from "../assets/img/pidecor/dog.png";
import imagePidecor1 from "../assets/img/pidecor/pidecor1.jpg";
import imagePidecor2 from "../assets/img/pidecor/pidecor2.png";
import giffPidecor1 from "../assets/img/pidecor/requisitos-pidecor.gif";
import imagePlants from "../assets/img/pidecor/plants.png";

const PageBody = () => {
  return (
    <div className="main-container">
      <section>
        <h3>
          <b>A História</b>
        </h3>
        <img src={imageTcc} className="post-medium-image" alt=""></img>
        <p>
          Há alguns anos comecei uma pós graduação em Arquitetura de Software
          Distribuído. No começo, não tive muita segurança de que estava no
          caminho correto, pois muitas pessoas me falavam que uma pós graduação
          não agregaria tanto valor para meu papel de Desenvolvedora. As aulas
          eram á distância e no decorrer do curso, confesso que não fui tão
          regrada com elas porém quando foi dada a largada para a criação do
          TCC. Sua proposta foi escolher entre doisassuntos com seus requisitos
          funcionais e não funcionais, e desenvolver uma proposta arquitetural
          para eles, juntamente com uma prova de conceito (POC).
        </p>
        <img src={imageWindow} className="post-medium-image-left" alt=""></img>
        <p>
          Fiquei muito empolgada e passei noites em claro tentando decidir qual
          dos dois temas seria ideal, qual deles eu encontraria mais detalhes
          para entender do negócio, qual problema eu teria vontade e alegria em
          solucionar. Foi difícil mas consegui decidir pelo que possuía um nome
          maior:{" "}
          <b>
            Sistema de controle de vendas com a modalidade de entrega
            dropsipping
          </b>
          .
        </p>
        <p>
          Esta modalidade de entrega de mercadoria é muito utilizada em lojas
          que não trabalham com estoque, depois que elas recebem o pedido,
          encomendam a mercadoria com o fornecedor, que por sua vez envia o
          produto diretamente ao cliente. O problema que eu escolhi solucionar
          foi a necessidade de uma solução que engloba todas as informações
          destas rotinas de venda, logística e engajamento com o cliente, onde
          concentra todas as informações necessárias para a tomada de decisão, o
          que dificulta a eficácia na prestação dos serviços.
        </p>
        <img src={imageDog} className="post-medium-image" alt=""></img>
        <p>
          O sistema foi criado para concentrar em uma única aplicação todas as
          informações que o usuário precisa ter, sendo ele o cliente da loja, o
          vendedor externo ou até mesmo o administrador. O sistema tem como
          objetivo simplificar e impactar positivamente na jornada do usuário ao
          utilizar o sistema.
        </p>
        <p>
          O prazo para entrega era 3 meses corridos, onde deveria ser criada a
          proposta e desenvolver a POC. Em todos estes anos de desenvolvimento,
          pouquíssimas eram as vezes que eu precisei atuar com front, quase
          zero, então o desafio maior de todos propostos, era conseguir
          construir o frontend do meu projeto.
        </p>
        <p>
          Foram dias e noites na tentativa e erro para aprender a utilizar
          bootstrap, achar biblioteca que gera PDF, assistindo aulas online de
          Angular5, e aprendendo a criar charts responsivos, criando
          autenticação, assistindo aulas online de Angular5 (rsrs), alterando
          rotas e testando a implantação do projeto.
          <br />
          Foram dias e noites incríveis…!
        </p>
      </section>
      <hr className="hr-small"></hr>
      <section>
        <h3>
          <b>A Execução</b>
        </h3>
        <p>
          <b>PiDecor</b>, o e-commerce de decoração com a modalidade de entrega
          Dropshiping.
        </p>
        <img src={imagePidecor1} className="full-img" alt=""></img>
        <p>
          Em 2015, comprei uma máquina de costura e comecei a fazer algumas
          almofadas pra vender, foi onde surgiu a **Pidecor**, minha loja de
          almofadas. Era tudo muito lindo e dava um trabalho bem grande.{" "}
          <b>
            Tinha uma loja virtual linda que nunca vendeu se quer 1 almofada!
          </b>
        </p>
        <img src={imagePidecor2} className="full-img" alt=""></img>
        <p>
          Foi dali que surgiu a ideia de “personificar” a <b>Pidecor</b> como a
          minha plataforma de e-commerce para iniciar o TCC.
        </p>
        <p>
          Depois de ter este objetivo identificado, realizei algumas pesquisar e
          percebi que seria perda de tempo desenvolver um e-commerce, temos hoje
          muitas plataformas que já disponibilizam toda uma estrutura.
        </p>
        <p>
          Então pensei por um lado diferente, identifiquei três tipos de
          usuários para este e-commerce, os clientes da loja, os vendedores
          externos e o administrador do sistema, que cadastraria fornecedores,
          analisaria o mondante de vendas e daria suporte para os clientes.
          Pensando em toda a jornada do usuário, foi proposto 8 requisitos
          funcionais, de acordo com o papel do usuário.
        </p>
        <img src={giffPidecor1} className="full-img" alt=""></img>
        Um dos requisitos solicitados para o trabalho era que o sistema seja
        integrado com outros dois sistemas:
        <div className="content">
          <ul className="albums-list">
            <li className="items">
              De Fornecedores: que fornece os produtos da loja e promovem a
              entrega.
            </li>
            <li className="items">
              De monitoramento: que gera as informações gerenciais sobre os
              resultados das vendas e eventos de entrega.
            </li>
          </ul>
        </div>
        <p>
          Para obter as informações dos fornecedores e criar esta integração,
          construí uma mock que simula a API de fornecedores e disponibiliza os
          seus serviços utilizando o protocolo <b>SOAP</b>.
        </p>
        <img src={imagePlants} className="post-medium-image-left" alt=""></img>
        <p>
          Já na integração com o sistema de monitoramento, foi utilizado o
          Postman para simular os serviços que recebem as informações gerenciais
          e criei um agendador que envia para o sistema de monitoramento estas
          informações todos os dias no mesmo horário.
        </p>
        <li>
          O projeto está todo{" "}
          <a href="https://hub.docker.com/repository/docker/aliniribeiroo/pidecor-admin">
            dockerizado
          </a>
          , e está utilizando o docker-compose para sincronizar e facilitar o
          controle dos serviços;
        </li>
        <li>
          Disponibilizei o código e o roteiro de implantação no meu{" "}
          <a href="https://github.com/liniribeiro/pidecor">github</a>;
        </li>
        <li>
          Para visualizar o vídeo que eu criei para a pré apresentação do
          projeto está no{" "}
          <a href="https://www.youtube.com/watch?v=Hv1tI7ID35c">Youtube</a>.
        </li>
        <p>
          No dia da apresentação eu estava super nervosa, coração na mão e com
          medo de que ao mostrar minha aplicação, algo errado acontecesse. Eram
          10 horas da manhã e meu skype começou a chamar, era a apresentação
          online com os professores, e o tempo era bem limitado.
        </p>
        <p>
          Nervosa comecei a explicação e a apresentar a aplicação, no final veio
          o feedback do professor:
          <br />
          Ficamos todos muito felizes e impressionados com o seu trabalho. Você
          se preocupou com a jornada do usuário e construiu bem mais do que o
          esperado. Parabéns!
        </p>
        <p>
          Aquele dia foi realmente o melhor dia do ano (2018), sai de casa super
          feliz e sorrindo no caminho do trabalho, na semana seguinte a minha
          surpresa. <b>9.3</b>!
        </p>
        <p>
          <b>
            Em resumo, nestes três meses de arquitetura e desenvolvimento do
            projeto eu aprendi muitas coisas, me diverti, me senti uma
            super-heroína e depois uma burrinha e depois uma super-heroína de
            novo e juntando tudo isso, tirei uma nota super acima do que o
            esperado e hoje eu sei que sou capaz de qualquer coisa!
          </b>
        </p>
        <p>
          O vídeo de apresentação do trabalho se encontra no{" "}
          <a href="https://www.youtube.com/watch?v=Hv1tI7ID35c">Youtube</a> e o
          código com todo o projeto em meu{" "}
          <a href="https://github.com/liniribeiro/puc-mg-tcc-poc">Github</a>!
        </p>
      </section>
    </div>
  );
};

class Pidecor extends Component {
  render() {
    return (
      <div className="container-md main-container">
        <Page
          title="PiDecor"
          short_description="Meu projeto de conclusão de curso da Especialização em arquitetura de Software pela PUC de Minas"
          header_img={headerImage}
          class_image="page-img-medium"
        />
        <PageBody />
      </div>
    );
  }
}

export default Pidecor;
