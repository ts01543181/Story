import React from 'react';
import {render} from 'react-dom';

var Search = (props) => {
  console.log(props)

  let triggerSearch = function() {
    let options = {};
    options.query = $(".search").val();
    options.max = 48;
    options.key = window.SHUTTERSHOCK_API;
    searchShutterShock(options, function(data) {
      props.searchFunc(data);
    });
  }

  return (
    <div className="logo" className="searchBar">
      <input className="search" type="text"></input>
      <button className="searchButton" onClick={triggerSearch}> Search </button>
    </div>
  )
};

export default Search;
