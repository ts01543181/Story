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
      <img src={props.storyLineImage}/> 
      <button onClick={removeImage}>x</button>
    </div>
  )
};

export default StoryLineEntry;
