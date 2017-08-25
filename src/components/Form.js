import React, {Component} from 'react';

export default class Form extends Component {
  render(){
    return (
      <section>
        <form onSubmit={this.props.handleSubmit}>
          <h2>Form</h2>
          <input onChange={this.props.handleNameChange}/>
        </form>
      </section>
   )
  }
}
