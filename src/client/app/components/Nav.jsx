import React from 'react';
import {render} from 'react-dom';
import Search from './Search.jsx';
import axios from 'axios';

var Nav = (props) => {

  let postThisStory = function(storyObj) {
    axios.post('/', storyObj)
  }

  let saveThisStory = function() {
    let storyTitle = prompt("What do you want to title your story?")
    let storyObj = {
      title: storyTitle,
      storyLine: props.storyLine,
      username: props.user.username
    }
    console.log(storyObj)
    window.storyData.push(storyObj);
    postThisStory(storyObj)
  }

  return (
    <div className="navBar">
      <nav>
        <h1 className="header"><span id="theI">S</span><span>tory</span></h1>
        <button className="saveThisStoryButton" onClick={saveThisStory}> Save This Story </button>
        <button className="mainPageButton" onClick={props.goToMainPage}> Main Page </button>
        <button className="myStoriesButton" onClick={props.goToMyStoriesPage}> My Stories </button>
      </nav>
    </div>
  )
};

export default Nav;
