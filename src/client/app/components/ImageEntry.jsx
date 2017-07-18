import React from 'react';
import {render} from 'react-dom';

var ImageEntry = (props) => {
  return (
    <div className="imageEntryBlock">
      <img onClick={() => props.selectImageFunc(props.image.assets.preview.url)} className="eachImage" src={props.image.assets.preview.url} alt="" />
    </div>
  )
};

export default ImageEntry;
