import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src="https://placehold.it/75" />
        <div className="info">
        <div className="name">Name:</div>
        <div className="company">Company:</div>
        </div>
      </div>
    );
  }
}



//Every class must have a render function 
class App extends React.Component {
  render() {
    return (
      <div>
    <div className="header">{this.props.title}</div>
    <Card />
    </div>
    );
  }
}


export default App;