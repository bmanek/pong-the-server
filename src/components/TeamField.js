import React from 'react';
import Roster from './Roster';
import Arrangement from './Arrangement';
import Discard from './Discard';

const TeamField = (props) => {

    return (
      <div className="ui center aligned three column grid container">
        <Roster />
        <Arrangement rack={props.rack} />
        <Discard />
      </div>
    )
}

export default TeamField;
