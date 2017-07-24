import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.jsx';
import Images from './Images.jsx';
import StoryLine from './StoryLine.jsx';
import Stage from './Stage.jsx';
import Search from './Search.jsx';
import StoriesPage from './StoriesPage.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      imageList: window.imageList,
      storyLine: [],
      stageImage: {
        src: 'http://bestanimations.com/Books/pretty-book-bench-nature-water-outdoors-animated-gif.gif',
        caption: 'Write your story. . . Search for images below!'
      },
      page: 'mainPage',
    }
    this.deleteImage = this.deleteImage.bind(this);
    this.selectedImage = this.selectedImage.bind(this);
    this.stageImage = this.stageImage.bind(this);
    this.saveImage = this.saveImage.bind(this);
    this.goToMyStoriesPage = this.goToMyStoriesPage.bind(this);
    this.goToMainPage = this.goToMainPage.bind(this);
    this.searchedImages = this.searchedImages.bind(this);
    this.selectedImage = this.selectedImage.bind(this);
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

  goToMyStoriesPage() {
    this.setState({
      page: 'storiesPage',
    })
  }

  goToMainPage() {
    this.setState({
      page: 'mainPage',
    })
  }

  render () {
    if (this.state.page === 'mainPage') {

      // This is the main page
      return (
        <div>
          <div>
            <Nav searchFunc={this.searchedImages} storyLine={this.state.storyLine} goToMyStoriesPage={this.goToMyStoriesPage}/>
          </div>
          <div>
            <Stage stageImage={this.state.stageImage} storyLine={this.state.storyLine} saveImage={this.saveImage}/>
          </div>
          <div className="storyLineBlock">
            <StoryLine storyLine={this.state.storyLine} deleteImage={this.deleteImage} stageImage={this.stageImage} saveImage={this.saveImage}/>
          </div>
          <div>
            <Search searchFunc={this.searchedImages}/>
          </div>
          <div>
            <Images images={this.state.imageList} selectImageFunc={this.selectedImage}/>
          </div>
        </div>
      )
    } else if (this.state.page === 'storiesPage') {

      // This is the stories page
      return (
        <div>
          <StoriesPage goToMainPage={this.goToMainPage}/>
        </div>
      )
    }
  }
}

export default App;
