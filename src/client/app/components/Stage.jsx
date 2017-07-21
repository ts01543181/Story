import React from 'react';
import {render} from 'react-dom';

var Stage = (props) => {
  
  let getCaption = function() {
    let caption = $('.stageImageCaption').val();
    props.saveImage({src:props.stageImage.src, caption:caption})
  }

  console.log('new prop stageImage', props.stageImage.caption)

  return (
    <div className="stage">
      <img className="stageImage" src={props.stageImage.src}/>
      <textarea col="50" row="2" className="stageImageCaption">{props.stageImage.caption}</textarea>
      <button onClick={getCaption}>Save</button>
    </div>
  )
};

export default Stage;