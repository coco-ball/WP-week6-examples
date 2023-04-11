import React from "react";
import World from "./world";

export default function Hello() {
  return (
    <>
      <h1>
        Hello,
        <World name="World"></World>
        <img src="cat.jpg"></img>
      </h1>
    </>
  );
}
