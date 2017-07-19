import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

var StoryLineEntry = (props) => {
  var removeImage = () => {
    props.deleteImage(props.storyLineImage);
  }

  $(function() {
      $('img').on('click', function() {
        $('.initialText').hide();
        $('.hidden').show();
        $('.enlargeImageModalSource').attr('src', $(this).attr('src'));
        $('#enlargeImageModal').modal('show');
      });
  });

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
