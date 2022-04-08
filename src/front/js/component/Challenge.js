import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/_challenge.scss";
import { HeadingOne } from "./HeadingOne.js";

export const Challenge = (props) => {
  const { store, actions } = useContext(Context);
  const [unique, setUnique] = useState([]);
  const [count, setCount] = useState(0);

  function countHandler() {
    setCount(count + 1);
  }

  function handleUnique(array1, array2) {
    setUnique([...new Set([...array1, ...array2])]);
  }

  return (
    <>
      <HeadingOne body={props.headingBody} />
      <div className="challenge__body">
        Remove the duplicates in 2 Javascript objects (found in readme), add the
        results to an array and output the list of distinct names in an
        unordered list below this paragraph when{" "}
        <a
          href="#"
          onClick={() => {
            handleUnique(store.array1, store.array2);
            countHandler();
          }}>
          this link
        </a>{" "}
        {""}
        is clicked. If the operation has been completed already, notify the user
        that this has already been done.
        <br />
        <br />
        {unique.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          );
        })}
        {count > 1 ? alert("The operation has been completed already") : null}
      </div>
    </>
  );
};
