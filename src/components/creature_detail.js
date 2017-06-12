import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatureDetail extends Component {
  renderFolklores(){
    return _.map(this.props.creature.folklores, (folklore, i) => {
      return (
        <p key={folklore.id}>
        {i + 1}. {folklore.reference}
        </p>
      )
    })
  }

  render() {

    if (_.isEmpty(this.props.creature)) {
      return (
        <div>
          <h2>Please select a creature from the Index!</h2>
        </div>
      );
    }

    return (
      <div>
        <h1>{this.props.creature.name}</h1>
        <p> Description: {this.props.creature.description} </p>
        <h3> Folklores: </h3>
        <ul> {this.renderFolklores()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ creature }) {
  return { creature };
}

export default connect(mapStateToProps)(CreatureDetail);
