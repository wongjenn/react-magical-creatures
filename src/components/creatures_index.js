import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCreatures, selectCreature } from '../actions';


class CreaturesIndex extends Component {
  componentDidMount() {
    this.props.fetchCreatures();
  }

  renderIndex() {
    return _.map(this.props.creatures, creature => {
      return (
        <li key={creature.name} onClick={() => this.props.selectCreature(creature.id)}>
          <a> {creature.name}</a>
        </li>
      )
    })

  }

  render() {
    return (
      <div>
        <h3> Creatures Index </h3>
        <ul>
          {this.renderIndex()}
        </ul>
      </div>
    );
  }

}

function mapStateToProps({creatures}) {
  return { creatures };
}

export default connect(mapStateToProps, { fetchCreatures, selectCreature })(CreaturesIndex);
