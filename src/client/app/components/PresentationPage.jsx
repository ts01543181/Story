import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';

class PresentationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
    }
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.rightNextPage = this.rightNextPage.bind(this);
    this.props.presStory.story = JSON.parse(this.props.presStory.story);
  }

  componentDidMount() {
    console.log('MOUNTING')
    $(document).keydown((e) => {
      if(e.which === 39) {
        this.nextPage();
      }
    })
    $(document).keydown((e) => {
      if(e.which === 37) {
        this.prevPage();
      }
    })
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

  rightNextPage(e) {
    console.log(e.key)
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
          <div><p className="presCaption">{this.props.presStory.story[this.state.n].caption}</p></div>
        </div>
      </div>
    )
  }
}

export default PresentationPage
