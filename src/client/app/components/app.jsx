import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.jsx';
import Images from './Images.jsx';
import StoryLine from './StoryLine.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      imageList: window.exampleImages,
      storyLine: []
    }
    this.deleteImage = this.deleteImage.bind(this);
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

<<<<<<< HEAD
  deleteImage(imageUrl) {
    var newArr = this.state.storyLine.filter(function(storyImageUrl) {
      return storyImageUrl !== imageUrl;
    });
    this.setState({
      storyLine: newArr
=======
  deleteImage(imageClicked) {
    
    var remainingImages = this.state.storyLine.filter(function(storyImage) {
      return storyImage !== imageClicked;
    });

    this.setState({
      storyLine:remainingImages
>>>>>>> 820d643930cd76e905747ea095de2b34b8c0e340
    })
  }

  render () {
    return (
      <div>
        <div>
          <Nav searchFunc={this.searchedImages.bind(this)}/>
        </div>
        <div className="storyLineBlock">
<<<<<<< HEAD
          <StoryLine storyLine={this.state.storyLine} />
=======
          <StoryLine storyLine={this.state.storyLine} deleteImage={this.deleteImage}/>
>>>>>>> 820d643930cd76e905747ea095de2b34b8c0e340
        </div>
        <div>
          <Images images={this.state.imageList} selectImageFunc={this.selectedImage.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App;
