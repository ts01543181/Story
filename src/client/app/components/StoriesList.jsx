import React from 'react';
import {render} from 'react-dom';
import StoriesListEntry from './StoriesListEntry.jsx';

var StoriesList = (props) => {

  return (
    <div className="storiesList">
      {props.storyData.map(storyObj =>
        <StoriesListEntry storyObj={storyObj}/>
      )}
    </div>
  )
};

export default StoriesList;
