import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDetails, toggleDetails } from '../actions';


class DisplayData extends Component {
  constructor(props) {
        super(props);
    }   

  componentDidMount() {
        this.props.dispatch(fetchDetails());  

    }    

   render() {
    const { persons, visibility } = this.props;
    // const showHideDetails = (id) => {
    //   this.props.dispatch(toggleDetails(id));
    // }
    
     return (
         <ul>
            {/* {console.log(persons)} */}
            {console.log(visibility)}
            {persons.map(person =>
              <li key={person.id} onClick={() =>{this.props.dispatch(toggleDetails(person.id))}}> 
              {person.first}&nbsp;{person.last}  
              {visibility.some(el=> person.id == el.id && el.isVisible) ?   
              <ul id={person.id}>
                <li>First Name: {person.first}</li>
                <li>Last Name: {person.last}</li>
                <li> Age :{person.age}</li>
                <li>Role: {person.description}</li>
                <li>Location: {person.location}</li>
              </ul>
              : '' }
              </li>
            )}
              
        </ul>
     )
   }
}
const mapStateToProps = (state) => {
  return {
    persons: state.details.persons,
    visibility: state.details.visibility
  }
}



export default connect(mapStateToProps)(DisplayData);