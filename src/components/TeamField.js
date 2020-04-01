import React from 'react';
import Roster from './Roster';
import Arrangement from './Arrangement';
import Discard from './Discard';

const TeamField = () => {

    return (
      <div className="ui text container">
        <Roster />
        <Arrangement />
        <Discard />
      </div>
    )
}

export default TeamField;
