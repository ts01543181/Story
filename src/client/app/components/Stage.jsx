import React from 'react';
import {render} from 'react-dom';

class Stage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.stageImage.caption,
    };
  }

  getCaption() {
    let caption = $('.stageImageCaption').val();
    console.log(this.props.stageImage)
    props.saveImage({src:this.props.stageImage.src, caption:caption})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.getCaption();
  }

  render() {
    return (
      <div>
        <div className="stage">
          <img className="stageImage" src={this.props.stageImage.src}/>
        </div>
        <div className="stageImageCaption">
          <textarea className="stageImageCaption" value={this.state.value} onChange={this.handleChange.bind(this)}></textarea>
          <button className="saveCaptionButton" onClick={this.getCaption}>Save</button>
        </div>
      </div>
    )
  }
};

export default Stage;
