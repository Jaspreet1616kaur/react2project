import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Search({ inputWord, population }) {
  const [val2, setVal2] = React.useState([0, 100]);

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

      {/* <Form.Label style={{ background: "red" }}>
        <h1> Check Population According to Range </h1>
      </Form.Label>
      <Form.Range
        value={population}
        min={0}
        max={100}
        onChange={(ev, v) => setVal2(v)}
      /> */}
    </div>
  );
}

export default Search;
