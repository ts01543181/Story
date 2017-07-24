import React from 'react';
import {render} from 'react-dom';

var Search = (props) => {

  let triggerSearch = function() {
    let options = {};
    options.query = $(".search").val();
    options.max = 32;
    options.key = window.SHUTTERSHOCK_API;
    searchShutterShock(options, function(data) {
      props.searchFunc(data);
    });
  }

  let enterTriggerSearch = function(e) {
    if (e.key === 'Enter') {
      let options = {};
      options.query = $(".search").val();
      options.max = 30;
      options.key = window.SHUTTERSHOCK_API;
      searchShutterShock(options, function(data) {
        props.searchFunc(data);
      });
    }
  }

  return (
    <div className="logo" className="searchBar">
      <input className="search" type="text" onKeyPress={enterTriggerSearch}></input>
      <button className="searchButton" onClick={triggerSearch}> Search </button>
    </div>
  )
};

export default Search;
