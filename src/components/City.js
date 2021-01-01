import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

export default function City({ cityName, temp, color }) {
  const history = useHistory();

  function handleClick() {
    history.push("/city?name=" + cityName);
  }

  return (
    <button
      className={
        "flex flex-row p-5 m-8 justify-between items-center inline-block " +
        color
      }
      onClick={handleClick}
    >
      <div className="text-4xl font-family:Georgia">{cityName}</div>
      <div className="text-4xl font-bold font-family:Georgia">{temp}</div>
    </button>
  );
}
