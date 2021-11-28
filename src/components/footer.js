import React from 'react'


const EmailIcon = () => {
    return (
        <li className="list-inline-item">
        <a href="mailto:alini.dev@gmail.com" title="Email me">
        <span className="fa-stack fa-lg" aria-hidden="true">
        <i className="fas fa-circle fa-stack-2x"></i>
        <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
        </span>
        <span className="sr-only">Me envie um e-mail</span>
        </a>
        </li>   
    )
}


const GithubIcon = () => {
    return (
        <li className="list-inline-item">
        <a href="https://github.com/liniribeiro" title="Github">
        <span className="fa-stack fa-lg" aria-hidden="true">
        <i className="fas fa-circle fa-stack-2x"></i>
        <i className="fab fa-github fa-stack-1x fa-inverse"></i>
        </span>
        <span className="sr-only">Github</span>
        </a>
        </li>   
    )
}

const LinkedinIcon = () => {
    return (
        <li className="list-inline-item">
        <a href="https://www.linkedin.com/in/aliniribeiro/" title="Github">
        <span className="fa-stack fa-lg" aria-hidden="true">
        <i className="fas fa-circle fa-stack-2x"></i>
        <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
        </span>
        <span className="sr-only">Github</span>
        </a>
        </li>   
    )
}

const Footer = (props) => {

        return (
            <footer>
                <div>
                <ul className="list-inline text-center footer-links">
                    <EmailIcon />
                    <GithubIcon />
                    <LinkedinIcon />
                </ul>
                <p className="copyright text-muted">
                    Alini Ribeiro • 2021 • 
                    <a href="https://liniribeiro.github.io/"> liniribeiro@github.io
                    </a>
                </p>
            </div>
            </footer>     
        );
    }


export default Footer