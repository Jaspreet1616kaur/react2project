import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Search({ inputWord, population }) {
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
