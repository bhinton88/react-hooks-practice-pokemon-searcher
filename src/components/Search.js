import React from "react";

function Search({ handleSetSearch }) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSetSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
