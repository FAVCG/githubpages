import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


const CardList = (props) => (
  <div>
    {/* when we do this all the properties of the object will become props for this component.  */}
    {/* <Card {...testData[0]} />
    <Card {...testData[1]} /> 
    <Card {...testData[2]} /> */}
    {props.profiles.map(profile => <Card {...profile}/>)}
  </div>
);
//Converts the testData object into what is below this line.
//[<Card />, <Card />, <Card />]
//[React.createElement(), React.createElement(), React.createElement()]



class Card extends React.Component {
  render() {
    //the this keyword refers to an instance of the card component. 
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url}/>
        <div className="info">
    <div className="name">{profile.name}</div>
    <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    return(
      <form action="">
        <input type="text" placeholder="Github username" /> 
        <button>Add Card</button>
      </form>
    );
  }
}

//Every class must have a render function 
class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     profiles: testData,
//   };
// }
state = {
  profiles: testData,
};

  render() {
    return (
      <div>
    <div className="header">{this.props.title}</div>
    <Form />
    <CardList profiles={this.state.profiles}/>
    </div>
    );
  }
}


export default App;