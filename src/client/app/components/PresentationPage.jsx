import React from 'react';
import {render} from 'react-dom';

class PresentationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

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
            <button className="myStoriesButton" onClick={this.props.fetchData}> My Stories </button>
          </nav>
        </div>
        <div>
          PRESENT
        </div>
      </div>
    )
  }
}

export default PresentationPage
