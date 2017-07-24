import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.jsx';
import Images from './Images.jsx';
import StoryLine from './StoryLine.jsx';
import Stage from './Stage.jsx';
import Search from './Search.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      imageList: window.exampleImages,
      storyLine: [],
      stageImage: {
        src: 'http://bestanimations.com/Books/pretty-book-bench-nature-water-outdoors-animated-gif.gif',
        caption: 'Write your story. . . Search for images below!'
      },
    }
    this.deleteImage = this.deleteImage.bind(this);
    this.selectedImage = this.selectedImage.bind(this);
    this.stageImage = this.stageImage.bind(this);
    this.saveImage = this.saveImage.bind(this);
  }

  searchedImages(data) {
    this.setState({
      imageList: data.data
    });
  }

  stageImage(imageUrl) {
    var desiredImageObj = this.state.storyLine.filter((imageObj) => {
      return imageUrl === imageObj.src;
    })

    console.log('THIS SHOULD BE THE IMAGE BEING STAGED', desiredImageObj[0])

    this.setState({
      stageImage: desiredImageObj[0]
    });
  }

  saveImage(imageObj) {
    this.state.storyLine.forEach((img) => {
      if (imageObj.src === img.src) {
        img.caption = imageObj.caption
      }
    })
    console.log('THIS IS THE UPDATED STORYLINE', this.state.storyLine)
  }

  selectedImage(imageUrl) {
  //this function puts the selected image to the story line area
    var newArr = this.state.storyLine;
    newArr.push({
      src: imageUrl,
      caption: 'Write your story here. . .',
    });
    this.setState({
      storyLine: newArr
    })
  }

  deleteImage(imageClicked) {

    var remainingImages = this.state.storyLine.filter((storyImage) => {
      return storyImage.src !== imageClicked;
    });

    this.setState({
      storyLine:remainingImages
    })
  }

  render () {
    return (
      <div>
        <div>
          <Nav searchFunc={this.searchedImages.bind(this)}/>
        </div>
        <div>
          <Stage stageImage={this.state.stageImage} storyLine={this.state.storyLine} saveImage={this.saveImage}/>
        </div>
        <div className="storyLineBlock">
          <StoryLine storyLine={this.state.storyLine} deleteImage={this.deleteImage} stageImage={this.stageImage} saveImage={this.saveImage}/>
        </div>
        <div>
          <Search searchFunc={this.searchedImages.bind(this)}/>
        </div>
        <div>
          <Images images={this.state.imageList} selectImageFunc={this.selectedImage.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App;
