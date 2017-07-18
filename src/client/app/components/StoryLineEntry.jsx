import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

var StoryLineEntry = (props) => {

  var deleteAll = () => {
    $('.storyLineEntry').hide({opacity: 0.2}, 450)
  }

  return (
    <div className="storyLineEntry">
      <img src={props.storyLineImage}/>
      <button onClick={deleteAll}>x</button>
    </div>
  )
};

export default StoryLineEntry;
