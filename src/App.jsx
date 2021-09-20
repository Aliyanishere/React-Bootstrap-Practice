import React, { Component } from 'react';
import './App.css';
import Card from './component/card';
import Nike from './images/photo.jpg'
import appleWatch from './images/photo2.jpg'
import designWatch from './images/photo3.jpg'
import lipstick from './images/photo4.jpg'
import headphone from './images/photo5.jpg'
import handbag from './images/photo6.jpg'
import flashDrive from './images/photo7.jpg'
import mensJeans from './images/photo8.jpg'
import mensHoddie from './images/photo9.jpg'

// import Nav from './component/Nav';
// import Fotter from './component/Footer';
// import BasicTextFields from './component/textField';
// import Corusel from './component/corusel'

class Project extends Component {
  // constructor(){
    // super()
    // this.state = {
      // name: "Aliyan Hussain",
      // email: "aliyan@gmail.com",
      // value: "",
      // value2: ""
    // }
  // }
  // setData=()=>{
  //   this.setState({
  //     name: this.state.value,
  //     email: this.state.value2
  //   })
  // }
  // getData=()=>{
  //   console.log(this.state.name,this.state.email);
  // }
  // handleChange=(e)=>{
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
  render() {
    return (
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        <Card  image={Nike} title="Nike sports Shoes" price="1150"/>
        <Card  image={appleWatch} title="Apple digital watch" price="5499"/>
        <Card  image={designWatch} title="Smart mannual watch" price="3000"/>
        <Card  image={lipstick} title="Celine mat red lipstick" price="430"/>
        <Card  image={headphone} title="Music headphones" price="1200"/>
        <Card  image={handbag} title="Handbag" price="200"/>
        <Card  image={flashDrive} title="Samsung Flash Drive" price="1700"/>
        <Card  image={mensJeans} title="Mens Jeans" price="1200"/>
        <Card  image={mensHoddie} title="Mens Hoddie" price="1500"/>
      </div>
      // <div className="contente">
      //   <Nav />
      //   <h2 className="Ali">Aliyan Hussain</h2>
      //   <Fotter />
      //   <br /><br /><br />
      //   <BasicTextFields />
      //   <br /><br /><br />
      //   <Corusel />
      // </div>
      // <div>
      //   <h1>My name is {this.state.name}</h1>
      //   <h1>Email: {this.state.email}</h1><br />
      //   <input type="text" name="name" onChange={(e)=>this.handleChange(e)} placeholder="Enter your name"/>
      //   <input type="email" name="email" onChange={(e)=>this.handleChange(e)} placeholder="Enter your email"/>
      //   <button onClick={this.setData}>Set Data</button>
      //   <button onClick={this.getData}>Get Data</button>
      // </div>
    )
  }
};

export default Project;