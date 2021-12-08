import React, { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);

  const formatCount = () => {
    return count === 0 ? "empty" : count;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    setCounter((prevState) => (prevState - 1 < 0 ? 0 : prevState - 1));
  };

  const handleChange = (id) => {
    setTags((prevState) => prevState.filter((tag) => tag !== id));
  };

  const renderTags = () => {
    return (
      tags.length !== 0 &&
      tags.map((tag) => (
        <li
          key={tag}
          className="btn btn-sm btn-primary m-2"
          onClick={() => handleChange(tag)}
        >
          {tag}
        </li>
      ))
    );
  };
  if (tags.length !== 0) {
    return <ul>{renderTags()}</ul>;
  }
  return (
    <>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button className="btn btn-sm btn-primary m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-sm btn-primary m-2" onClick={handleDecrement}>
        -
      </button>
    </>
  );
};

export default Counter;
