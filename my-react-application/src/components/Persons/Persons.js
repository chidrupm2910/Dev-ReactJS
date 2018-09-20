import React, {PureComponent} from 'react';
import Person from "./Person/Person";

class Persons extends PureComponent {
    constructor(props){
    super(props)
    console.log("inside persons constructor")
  }
  componentDidMount(){
    console.log("inside persons component did mount");
  }
  
  componentWillMount(){
    console.log("inside persons component mount");
  }
  
  componentWillReceiveProps(nextProps){
      console.log("inside component will receive props", nextProps);
  }
    
  /*shouldComponentUpdate(nextProps,nextState){
      console.log("Update persons js inside showld component Update", nextProps, nextState);
      return nextProps.persons !== this.props.persons;
  }*/
  
  componentWillUpdate(nextProps, nextState){
  
      console.log("Component will uppdate", nextProps, nextState);
  }
  componentDidUpdate(nextProps, nextState){
  
      console.log("Component did uppdate");
  }
    render() {
        return (
          this.props.persons.map((person,index) => {
          return  <Person 
          click={() => this.props.clicked(index)}
          name={person.name} 
          age={person.age}
          
          key = {person.id}
          changed={(event) => this.props.changed(event, person.id)}/>
        })
        
    );
        
        
    }
}
    
    export default Persons;