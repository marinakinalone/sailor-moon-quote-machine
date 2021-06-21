import React from 'react';
import './App.css';


import sailorMoonQuotes from "./smquotes.js"
import zero from "./images/00.png"
import one from "./images/01.png"
import two from "./images/02.png"
import three from "./images/03.png"
import four from "./images/04.png"
import five from "./images/05.png"
import six from "./images/06.png"
import seven from "./images/07.png"
import eight from "./images/08.png"
import nine from "./images/09.png"
import ten from "./images/10.png"
import eleven from "./images/11.png"
import twelve from "./images/12.png"
import thirteen from "./images/13.png"
import fourteen from "./images/14.png"
import fifteen from "./images/15.png"
import sixteen from "./images/16.png"
import seventeen from "./images/17.png"
import eighteen from "./images/18.png"
import nineteen from "./images/19.png"
import twenty from "./images/20.png"
import twentyone from "./images/21.png"
import twentytwo from "./images/22.png"



const arrayOfImg = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo]

const arrayOfColors = ["#9286c4", "#b6d0fc", "#f7aecc", "#ecd9df"]

const randomize = (length) => {
  let random = Math.floor(Math.random() * length);
  return random
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteNb: randomize(22),
      colorNb: randomize(4)
     };
    this.handleClick = this.handleClick.bind(this);
    
  }

  handleClick() {
    let randomQuote = randomize(22)
    let randomColor = randomize(4)
    if (this.state.quoteNb !== randomQuote && this.state.colorNb !== randomColor) {
      this.setState({
        quoteNb: randomQuote,
        colorNb: randomColor
      })
    } else {
      this.handleClick()

    }
  }
  
  render() {
  return (
    <div>
      <div className="main">
        <div className="container" id="img-box">
          <img src={arrayOfImg[this.state.quoteNb]} alt="sailor moon illustration" />
        </div>
        <div className="container" id="quote-box" style={{backgroundColor: arrayOfColors[this.state.colorNb]}}>
          <p id="text">"{sailorMoonQuotes[this.state.quoteNb]["text"]}"</p>
          <p id="author">- {sailorMoonQuotes[this.state.quoteNb]["author"]}</p>
          <button onClick={this.handleClick.bind(this)} id="new-quote">new quote</button>
        </div>
      </div>
      <div id="copyright">
        <p>illustrations from <a href="https://sailormoonscreencaps.tumblr.com" target="_blank">sailor moon screencaps</a></p>
        <p>sailor moon quote machine by <a href="https://kinalone.dev" target="_blank">mks</a></p>
      </div>
    </div>
  );
  }
}

export default App;