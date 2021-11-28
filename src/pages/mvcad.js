import React from "react";
import Page from "../components/page";
import headerImage from "../assets/img/posts/maria-vai-comas-devs/nascimento.jpg";
import mariaImage1 from "../assets/img/posts/maria-vai-comas-devs/maria2.png";
import material from "../assets/img/posts/maria-vai-comas-devs/Material-completo-de-Python-Maria-vai-com-as-Devs.pdf";
import byeGiff from "../assets/img/posts/maria-vai-comas-devs/xau.gif";
import imgCover from "../assets/img/posts/maria-vai-comas-devs/maria-capa.png";

const PageBody = () => {
  return (
    <div className="main-container">
      <br />
      <br />
      <section>
        <img src={mariaImage1} className="post-medium-image-left" alt=""></img>

        <br />
        <p>
          Tão gratificante quanto resolver um problema com um belo algoritmo, é
          poder compartilhar o conhecimento.
        </p>
        <p>
          Há alguns meses a{" "}
          <a href="https://www.linkedin.com/in/j%C3%A9ssica-alves-072158a7/">
            Jéssica Alves
          </a>{" "}
          e a <a href="https://www.linkedin.com/in/suzanes/">Suzane Sant Ana</a>
          nos proporcionaram esta oportunidade incrível de poder incentivar e
          abrir lugar para, cada vez mais pessoas se apaixonarem pelo
          desenvolvimento. Então,{" "}
          <a href="https://www.linkedin.com/in/luciane-tedesco/">
            Luciane Tedesco
          </a>
          ,{" "}
          <a href="https://www.linkedin.com/in/priscilapower/">
            Priscila Power
          </a>
          ,{" "}
          <a href="https://www.linkedin.com/in/daniela-paim-b1a6a946/">
            Daniela Paim
          </a>{" "}
          e eu obviamente aceitamos, com muita felicidade no coração.
          <br />
          <br />
          <b>Maria vai com as Devs</b> é um projeto com um propósito lindo, que
          hoje tenho certeza que me ajudou a encontrar o meu propósito de vida:{" "}
          <b>
            Incentivar cada vez mais, pessoas a entrarem no mundo da Tecnologia
            ♡.
          </b>
        </p>
        <p>
          As inscrições ficaram abertas por 11 dias e houveram mais de 2 mil
          mulheres de todas as partes do Brasil inscritas. <br />
          Inicialmente a proposta do programa era abrir 10 vagas para os
          encontros presenciais, porém, como o volume de inscrições foi muito
          grande, sem contar com a situação do mundo, decidimos por fazer os
          encontros online com 56 participantes!
        </p>
        <img src={headerImage} className="maria-img-principal" alt=""></img>

        <br />

        <p>O programa conta com os seguintes módulos:</p>
        <li>
          <b>Entendendo a Web</b>
        </li>
        <li>
          <b>Métodologias ágeis</b>
        </li>
        <li>
          <b>Git e Github</b>
        </li>
        <li>
          <b>Introdução ao Python</b>
        </li>
        <li>
          <b>Banco de Dados</b>
        </li>
        <li>
          <b>Aprodundamento ao Python</b>
        </li>
        <li>
          <b>Docker</b>
        </li>
        <li>
          <b>Convidadas especiais</b>
        </li>
        <br />
        <br />

        <p>
          Cada detalhe pensado com muito amor e carinho para proporcionar uma
          experiência acolhedora para todas.
        </p>
        <br />
        <br />
        <hr className="hr-small"></hr>
        <h1>Trajetória</h1>
        <p>
          O programa iniciou dia 12 de setembro com as aulas todos os sábados
          das 09:00 ás 13:00, foram um total de 13 encontros em que aos
          pouquinhos tentavámos dar força e conhecimento a estas mulheres
          maravilhosas. Nosso objetivo desde o começo foi levar conhecimento ao
          maior número possível de pessoas e conseguir dar apoio e força para
          quem está iniciando no mundo da TI. No final desta primeira edição,
          saímos com nossa primeira experiência em compartilhar conhecimento,
          muitas amizades, muito carinho e o tanto que aprendemos com todas
          elas, foi surreal.
        </p>
      </section>
      <br />
      <br />
      <hr className="hr-small"></hr>
      <section>
        <h3>
          <b>Material</b>
        </h3>
        <p>
          Uma das minhas principais responsabilidades no programa, foi montar o
          material das aulas. <br />
          Foram muitos dias e muitas horas pensando em qual a melhor métodologia
          para repassar conhecimento, pensando como montar um material que seria
          fácil para ser revisado várias vezes.
          <br />
          Foram dias de pesquisas, leituras, tentativas e retentativas, dias
          implementando todos os exercícios que seriam passados, para que não
          houvessem nenhum imprevisto durante a aula.
          <br />E em mente o toco de sempre ser o material que será leve e
          divertido, porque já passamos uma semana pesada, ningém aguentaria
          passar mais 4 horas num sábado sem <b>sorrir</b>!
        </p>
        <div className="pdf-content">
          <embed
            src={material}
            width="100%"
            height="480"
            alt="pdf"
            pluginspage="http://www.adobe.com/products/acrobat/readstep2.html"
          />
        </div>
        <br />
        <p>
          Além das aulas de programação, tivemos muitas conversas sobre carreira
          e o dia a dia de uma desenvolvedora, tivemos a presença de convidados
          especias e também preparamos materiais bem legais para ajudar neste
          início de carreira e na jornada de aprendizagem.
        </p>
      </section>
      <section>
        <h1>Agradecimentos</h1>
        <p>
          Agradeço a todas as mulheres que me ajudaram a evoluir como pessoa e
          como profissional! <br />
          <b>Vocês sempre estarão em meu coração!</b>
        </p>
        <br />
        <img
          className="maria-giff"
          src={byeGiff}
          alt="Imagem nascimento Maria"
        />{" "}
        <br />
        <img src={imgCover} alt="Alini Programs" className="full-img" />
      </section>
    </div>
  );
};

const Mvcad = () => {
  return (
    <div className="container-md main-container">
      <Page
        title="Maria vai com as Devs"
        short_description="Projeto com um propósito incrível, de mudar a vida de mulheres com a Tecnologia."
        class_image="maria-img-principal"
      />
      <PageBody />
    </div>
  );
};

export default Mvcad;
