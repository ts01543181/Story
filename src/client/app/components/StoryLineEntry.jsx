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
        <img src={props.storyLineImage} onClick={() => props.stageImage(props.storyLineImage)}/>
      </div>
    </div>
  )
};
//img onclick will trigger stageImage function which takes in the image's src
export default StoryLineEntry;
