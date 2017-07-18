import React from 'react';
import {render} from 'react-dom';
import StoryLineEntry from './StoryLineEntry.jsx';

var StoryLine = (props) => {
  console.log(props)

  return (
    <div className="storyLine">
      {props.storyLine.map(imageUrl =>
        <StoryLineEntry storyLineImage={imageUrl}/>
      )}
    </div>
)};

export default StoryLine;
