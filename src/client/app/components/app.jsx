import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.jsx';
import Images from './Images.jsx';
import StoryLine from './StoryLine.jsx';
//tes
class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      imageList: window.exampleImages,
      storyLine: []
    }
  }

  searchedImages(data) {
    this.setState({
      imageList: data.data
    });
  }

  selectedImage(imageUrl) {
    var newArr = this.state.storyLine;
    newArr.push(imageUrl);
    this.setState({
      storyLine: newArr
    })
  }

  // deleteImage() {
  //   var newArr = this.state.storyLine.filter(function(storyImage) {
  //     return;
  //   });
  // }

  render () {
    return (
      <div>
        <div>
          <Nav searchFunc={this.searchedImages.bind(this)}/>
        </div>
        <div className="storyLineBlock">
          <StoryLine storyLine={this.state.storyLine}/>
        </div>
        <div>
          <Images images={this.state.imageList} selectImageFunc={this.selectedImage.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App;
