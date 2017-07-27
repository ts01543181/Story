import React from 'react';
import {render} from 'react-dom';

var StoriesList = (props) => {

  console.log('STORIES LIST IS FIRING', window.storyData)

  return (
    <div className="storiesList">
      {props.storyData.map(storyObj =>
        <div className="storiesListEntry">
            <div className="storiesListItem">
              <a href="#" className="storiesAnchorTag">{storyObj.title}</a>
            </div>
            <button className="deleteStoriesButton">Delete Story</button>
        </div>
      )}
    </div>
  )
};

export default StoriesList;
