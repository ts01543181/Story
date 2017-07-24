import React from 'react';
import {render} from 'react-dom';

class Stage extends React.Component {
  constructor(props) {
    super();
    console.log('SELECTED NEW IMAGE NOW AM CHANGING WHAT CAPTION IS', props.stageImage.caption)
    this.state = {
      value: props.stageImage.caption,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.stageImage.caption });
  }

  getCaption() {
    let caption = this.state.value;
    this.props.saveImage({src:this.props.stageImage.src, caption:caption})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="stage">
          <img className="stageImage" src={this.props.stageImage.src}/>
        </div>
        <div className="stageImageCaptionSet">
          <textarea className="stageImageCaption" value={this.state.value} onChange={this.handleChange.bind(this)}></textarea>
          <button className="saveCaptionButton" onClick={this.getCaption.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
};

export default Stage;
