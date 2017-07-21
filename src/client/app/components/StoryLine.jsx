import React from 'react';
import {render} from 'react-dom';
import StoryLineEntry from './StoryLineEntry.jsx';

var StoryLine = (props) => {
  console.log(props.storyLine)
  return (
    <div className="storyLine">
      {props.storyLine.map(imageUrl =>
        <StoryLineEntry storyLineImage={imageUrl.src} deleteImage={props.deleteImage} stageImage={props.stageImage}/>
      )}
    </div>
  )
};

export default StoryLine;
