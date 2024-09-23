import React, { useState } from "react";
import './App.css';

function App() {
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("flex-start");
  const [alignItems, setAlignItems] = useState("flex-start");
  return (
    <div className="app">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection,
          justifyContent,
          alignItems,
        }}
      >
        <div className="box box1">box1</div>
        <div className="box box2">box2</div>
        <div className="box box3">box3</div>
      </div>
      <div className="controls">
        <h3>Flex-Direction</h3>

        <label>
          <input
            type="radio"
            name="flexDirection"
            value="row"
            checked={flexDirection === "row"}
            onChange={(e) => setFlexDirection(e.target.value)}
          />
          Row
        </label>
        <label>
          <input
            type="radio"
            name="flexDirection"
            value="column"
            checked={flexDirection === "column"}
            onChange={(e) => setFlexDirection(e.target.value)}
          />
          Column
        </label>
        <label>
          <input
            type="radio"
            name="flexDirection"
            value="row-reverse"
            checked={flexDirection === "row-reverse"}
            onChange={(e) => setFlexDirection(e.target.value)}
          />
          Row-Reverse
        </label>
        <label>
          <input
            type="radio"
            name="flexDirection"
            value="column-reverse"
            checked={flexDirection === "column-reverse"}
            onChange={(e) => setFlexDirection(e.target.value)}
          />
          Column-Reverse
        </label>

        <h3>Justify-Content</h3>
        <label>
          <input
            type="radio"
            name="justifyContent"
            value="flex-start"
            checked={justifyContent === "flex-start"}
            onChange={(e) => setJustifyContent(e.target.value)}
          />
          Flex-Start
        </label>
        <label>
          <input
            type="radio"
            name="justifyContent"
            value="center"
            checked={justifyContent === "center"}
            onChange={(e) => setJustifyContent(e.target.value)}
          />
          Center
        </label>
        <label>
          <input
            type="radio"
            name="justifyContent"
            value="flex-end"
            checked={justifyContent === "flex-end"}
            onChange={(e) => setJustifyContent(e.target.value)}
          />
          Flex-End
        </label>
        <label>
          <input
            type="radio"
            name="justifyContent"
            value="space-between"
            checked={justifyContent === "space-between"}
            onChange={(e) => setJustifyContent(e.target.value)}
          />
          Space-Between
        </label>
        <label>
          <input
            type="radio"
            name="justifyContent"
            value="space-around"
            checked={justifyContent === "space-around"}
            onChange={(e) => setJustifyContent(e.target.value)}
          />
          Space-Around
        </label>
        <label>
          <input
            type="radio"
            name="justifyContent"
            value="space-evenly"
            checked={justifyContent === "space-evenly"}
            onChange={(e) => setJustifyContent(e.target.value)}
          />
          Space-Evenly
        </label>

        <h3>Align-Items</h3>
        <label>
          <input
            type="radio"
            name="alignItems"
            value="flex-start"
            checked={alignItems === "flex-start"}
            onChange={(e) => setAlignItems(e.target.value)}
          />
          Flex-Start
        </label>
        <label>
          <input
            type="radio"
            name="alignItems"
            value="center"
            checked={alignItems === "center"}
            onChange={(e) => setAlignItems(e.target.value)}
          />
          Center
        </label>
        <label>
          <input
            type="radio"
            name="alignItems"
            value="flex-end"
            checked={alignItems === "flex-end"}
            onChange={(e) => setAlignItems(e.target.value)}
          />
          Flex-End
        </label>
        <label>
          <input
            type="radio"
            name="alignItems"
            value="stretch"
            checked={alignItems === "stretch"}
            onChange={(e) => setAlignItems(e.target.value)}
          />
          Stretch
        </label>
        <label>
          <input
            type="radio"
            name="alignItems"
            value="baseline"
            checked={alignItems === "baseline"}
            onChange={(e) => setAlignItems(e.target.value)}
          />
          Baseline
        </label>
      </div>
    </div>
  );
}

export default App;
