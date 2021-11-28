import React, { Component } from 'react'
import Markdown from 'react-markdown'
import markdown from './posts/markdown_data/2016-09-12-oracle.md'


class Jokebot extends Component { 
    render(){
        return (<Markdown source={markdown} />);
    }

};
  
export default Jokebot;
  
