import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

var StoriesListEntry = (props) => {

  var deleteStory = function() {
    axios.put('/delete', props.storyObj);
    props.goToMyStoriesPage();
  }

  return (
    <div className="storiesListEntry">
        <div className="storiesListItem">
          <a href="#" className="storiesAnchorTag">{props.storyObj.title}</a>
        </div>
        <button className="deleteStoriesButton" onClick={deleteStory}>Delete Story</button>
    </div>
  )
}

export default StoriesListEntry;
