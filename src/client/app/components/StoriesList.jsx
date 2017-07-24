import React from 'react';
import {render} from 'react-dom';

var StoriesList = (props) => {

  console.log('STORIES LIST IS FIRING', window.storyData)

  return (
    <div className="storiesList">
      {window.storyData.map(storyObj =>
        <div className="storiesListItem">{storyObj.title}</div>
      )}
    </div>
  )
};

export default StoriesList;
