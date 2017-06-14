import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreatureDetail extends Component {
  renderFolklores(){
    const folklores = this.props.creature.folklores;
    const regions = this.props.creature.regions;

    return _.map(folklores, (folklore, i) => {
      const regionId = folklore.region_id;
      const regionName = _.find(regions, {id: regionId});

      return (
        <p key={folklore.id}>
        {i + 1}. {regionName.name}
         <p>{folklore.reference} </p>
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
        <h3>Description: </h3>
        <p> {this.props.creature.description} </p>
        <h2> Folklores: </h2>
        <ul> {this.renderFolklores()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ creature }) {
  return { creature };
}

export default connect(mapStateToProps)(CreatureDetail);
