import React, {Component} from 'react';

export default class Jumbotron extends Component {
  render() {
    return (
      <section>
        <div>
          <h2>Jumbotron</h2>
          <strong>{this.props.pilotName}</strong>
        </div>
      </section>

    )
  }
}
