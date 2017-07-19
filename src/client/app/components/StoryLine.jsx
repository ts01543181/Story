import React from 'react';
import {render} from 'react-dom';
import StoryLineEntry from './StoryLineEntry.jsx';

var StoryLine = (props) => {
 

  return (
    <div className="modalContainer">
       <div className="modal fade" id="enlargeImageModal" tabIndex="-1" role="dialog" aria-labelledby="enlargeImageModal" aria-hidden="true">
          <p className="initialText">Write your story.<br/><br/>
          Search for images! <br/>
          </p>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
              </div>
              <div className="modal-body">
                <img src="" className="enlargeImageModalSource"/>
              </div>
              <textarea cols="50" className="hidden"></textarea>
            </div>
          </div>
      </div>
      <div className="container">
      <h1></h1>
      <div className="jumbotron"><h2></h2></div>
          <p><br/></p>
          <div className="storyLine">
            {props.storyLine.map(imageUrl =>
              <StoryLineEntry storyLineImage={imageUrl} deleteImage={props.deleteImage}/>
            )}
          </div>   
      </div>
    </div>
  )
};

export default StoryLine;
