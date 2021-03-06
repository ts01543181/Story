import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.jsx';
import StoriesList from './StoriesList.jsx';
import axios from 'axios';

class StoriesPage extends React.Component {
  constructor(props) {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="navBar">
          <nav>
            <h1 className="header"><span id="theI">S</span><span>tory</span></h1>
            <button className="saveThisStoryButton"> Save This Story </button>
            <button className="mainPageButton" onClick={this.props.goToMainPage}> Main Page </button>
            <button className="myStoriesButton" onClick={this.props.fetchData}> My Stories </button>
          </nav>
        </div>
        <div>
          <StoriesList storyData={this.props.storyData} goToMyStoriesPage={this.props.goToMyStoriesPage} goToPresentationPage={this.props.goToPresentationPage}/>
        </div>
      </div>
    )
  }
}

export default StoriesPage;
