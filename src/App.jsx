import React from 'react';
import axios from 'axios';
import './App.css';



// const testData = [
//   {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//   {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
//   {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];











const CardList = (props) => (
  <div>
    {/* when we do this all the properties of the object will become props for this component.  */}
    {/* <Card {...testData[0]} />
    <Card {...testData[1]} /> 
    <Card {...testData[2]} /> */}
    {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
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
        <img alt="avatar" src={profile.avatar_url}/>
        <div className="info">
    <div className="name">{profile.name}</div>
    <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  state = { userName: '' };
  // userNameInput = React.createRef();
  handleSubmit = async (event) => {
    event.preventDefault();
   const resp = await 
    axios.get(`https://api.github.com/users/${this.state.userName}`);
   this.props.onSubmit(resp.data);
   this.setState({userName: ''});
    // console.log(
    //   this.userNameInput.current.value
    //   this.state.userName
    // );
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        type="text" 
        value={this.state.userName}
        onChange={event => this.setState({ userName: event.target.value })}
        placeholder="Github username" 
        // ref={this.userNameInput} 
        required 
        /> 
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
  profiles: [],
};
addNewProfile = (profileData) => {
  this.setState(prevState => ({
    profiles: [...prevState.profiles, profileData],
  }));
};

  render() {
    return (
      <div>
    <div className="header">{this.props.title}</div>
    <Form onSubmit={this.addNewProfile}/>
    <CardList profiles={this.state.profiles}/>
    </div>
    );
  }
}


export default App;