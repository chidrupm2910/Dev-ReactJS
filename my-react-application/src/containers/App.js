import React, { Component } from 'react';

import './App.css';
import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props){
    super(props)
    console.log("inside constructor")
  }
  componentDidMount(){
    console.log("inside component did mount");
  }
  
  componentWillMount(){
    console.log("inside component mount");
  }
  
  state = {
    persons: [
      {id : "cdsdc",name:"Chid" , age: 24},
      {id : "cdszxcddc",name:"JJ" , age: 25},
      {id : "cdczcsdc",name:"Steph" , age: 28}

      ],
      showPersons: false,
      toggleClicked: 0
  }
deleteNameHandler = (personIndex) => {
    
   //const persons = this.state.persons.slice();
   const persons = [...this.state.persons];
   persons.splice(personIndex, 1);
   this.setState({persons: persons});
   console.log("Inside Delete handler")
  }
  
  nameChangeHandler = (event, id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person ={ ...this.state.persons[personIndex]};
    //Object.assign({}, this.state.persons[personIndex])
    
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
   this.setState({persons: persons})
    
  }
  
  toggleNameHandler = () => {
   const doesShow = this.state.showPersons;
   this.setState((prevState, props) =>{
     return {
       showPersons: !doesShow, toggleClicked: prevState.toggleClicked +1}
  }
   );
   console.log(this.state.toggleClicked);
  }
  render() {
    /*const style = {
      backgroundColor: "red",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };*/
    
    let persons = null;
    
    if(this.state.showPersons){
      persons = (
        
        <Persons 
        persons = {this.state.persons}
        clicked = {this.deleteNameHandler}
        changed = {this.nameChangeHandler}
        />
       
        )
    }
    return (
      <div className="App">
   
       <Cockpit 
       appTitle = {this.props.title}
       showPersons = {this.state.showPersons}
       persons = {this.state.persons}
       clicked={this.toggleNameHandler}
       />
        { persons}
        
      </div>
    );
  }
}

export default App;
