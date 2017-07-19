import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

var StoryLineEntry = (props) => {

<<<<<<< HEAD
  return (
    <div className="storyLineEntry">
      <img src={props.storyLineImage}/>
      <button>x</button>
=======
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
>>>>>>> 820d643930cd76e905747ea095de2b34b8c0e340
    </div>
  )
};

export default StoryLineEntry;
