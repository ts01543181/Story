import React from 'react';
import {render} from 'react-dom';

class PresentationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
    }
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.props.presStory.story = JSON.parse(this.props.presStory.story);
  }

  prevPage() {
    if (this.state.n > 0) {
      let nextIdx = this.state.n - 1;
      this.setState({
        n: nextIdx,
      })
    }
  }

  nextPage() {
    if (this.state.n < this.props.presStory.story.length - 1) {
      let nextIdx = this.state.n + 1;
      this.setState({
        n: nextIdx,
      })
    }
  }

  render() {
    return (
      <div>
        <div className="navBar">
          <nav>
            <h1 className="header"><span id="theI">S</span><span>tory</span></h1>
            <button className="saveThisStoryButton"> Save This Story </button>
            <button className="mainPageButton" onClick={this.props.goToMainPage}> Main Page </button>
            <button className="myStoriesButton" onClick={this.props.goToMyStoriesPage}> My Stories </button>
          </nav>
        </div>
        <div className="presStage">
          <div className="presStoryTitle">
            <button className="presSliderButtonsLeft" onClick={this.prevPage}>Previous Page</button>
            <div className="presStoryTitle"><h2>{this.props.presStory.title}</h2></div>
            <button className="presSliderButtonsRight" onClick={this.nextPage}>Next Page</button>
          </div>
          <div>
            <img className="presPic" src={this.props.presStory.story[this.state.n].src}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default PresentationPage
