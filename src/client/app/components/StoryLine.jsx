import React from 'react';
import {render} from 'react-dom';
import StoryLineEntry from './StoryLineEntry.jsx';

var StoryLine = (props) => {


  return (
    <div className="storyLine">
      {props.storyLine.map(imageUrl =>
        <StoryLineEntry storyLineImage={imageUrl} deleteImage={props.deleteImage}/>
      )}
    </div>
  )
};

export default StoryLine;
