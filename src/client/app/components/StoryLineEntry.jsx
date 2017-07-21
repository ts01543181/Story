import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

var StoryLineEntry = (props) => {
  var removeImage = () => {
    props.deleteImage(props.storyLineImage);
  }

  return (
    <div className="storyLineEntry">
      <button className="removePic" onClick={removeImage}>x</button>
      <div>
        <img src={props.storyLineImage}/>
      </div>
    </div>
  )
};

export default StoryLineEntry;
