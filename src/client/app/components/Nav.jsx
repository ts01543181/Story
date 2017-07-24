import React from 'react';
import {render} from 'react-dom';
import Search from './Search.jsx';

var Nav = (props) => {

  let saveThisStory = function() {
    let storyTitle = prompt("What do you want to title your story?")
    let storyObj = {
      title: storyTitle,
      storyLine: props.storyLine,
    }
    window.storyData.push(storyObj);
  }

  return (
    <div className="navBar">
      <nav>
        <h1 className="header"><span id="theI">S</span><span>tory</span></h1>
        <button className="saveThisStoryButton" onClick={saveThisStory}> Save This Story </button>
        <button className="mainPageButton"> Main Page </button>
        <button className="myStoriesButton" onClick={props.goToMyStoriesPage}> My Stories </button>
      </nav>
    </div>
  )
};

export default Nav;
