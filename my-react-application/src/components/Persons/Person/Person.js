import React,{Component} from 'react';
import "./Person.css"
import PropTypes from "prop-types";

class Person extends Component {
    constructor(props){
    super(props)
    console.log("inside person constructor")
  }
  componentDidMount(){
    console.log("inside person component did mount");
    this.inputElement.focus();
  }
  
  componentWillMount(){
    console.log("inside person component mount");
  }
    render() {
         return (
        <div className="Person">
        <p onClick={this.props.click}> I am a {this.props.name} and i am {this.props.age} </p>
        <p>{this.props.children}</p>
        <input 
        ref={(inp) => {this.inputElement = inp}}
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name} />
        </div>
        )
    }
    
}

Person.propTypes = {
  click: PropTypes.func ,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Person;