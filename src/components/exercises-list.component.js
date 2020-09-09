import React, { Component } from 'react';
import axios from 'axios';
export default class ExercisesList extends Component {
    constructor(props){
        super(props);
        this.state={
            exercises:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:5000/exercises').then(
            response => {
                if (response.data.length > 0) {
                  this.setState({ 
                    // users: response.data.map(user => user.username),
                    exercises: response.data.map(exercise=>exercise.description)
                  });}}
        )
    }
  render() {
    return (
      <div>
          <ul>
              {this.state.exercises.map(function(exercise){return <li>{exercise}</li>;} )}
          </ul>
        <p>You are on the Exercises List component!</p>
      </div>
    )
  }
}