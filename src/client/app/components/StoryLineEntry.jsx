import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

var StoryLineEntry = (props) => {

  return (
    <div className="storyLineEntry">
      <img src={props.storyLineImage}/>
      <button>x</button>
    </div>
  )
};

// CHANGE
export default StoryLineEntry;
