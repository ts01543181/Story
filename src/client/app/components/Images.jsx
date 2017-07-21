import React from 'react';
import {render} from 'react-dom';
import ImageEntry from './ImageEntry.jsx';

var Images = (props) => {

  return (
    <div className="allImagesContainer">
      <div className="allImages">
        {props.images.map(image =>
          <ImageEntry image={ image } selectImageFunc={props.selectImageFunc}/>
        )}
      </div>
    </div>
)};

export default Images;
