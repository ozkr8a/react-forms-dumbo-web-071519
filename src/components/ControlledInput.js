// Code ControlledInput Component Here
import React from 'react';

class Form extends React.Component {
  state = {
    firstName: 'John',
    lastName: 'Henry'
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  render() {
    return (
      <form>
        <input type='text' name='firstName' onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type='text' name='lastName' onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form