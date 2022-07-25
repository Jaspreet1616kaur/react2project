import React from "react";

function Search({ inputWord }) {
  return (
    <div>
      <input
        className="in"
        type="text"
        id="header-search.."
        placeholder="Please Search Here"
        name="s"
        onChange={inputWord}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
}

export default Search;
