import React, { useState } from "react";
import Counter from "./counter";

const CounterList = () => {
  const initialState = [
    { id: 0, value: 4, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    setCounters((prevState) => prevState.filter((count) => count.id !== id));
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (id) => {
    setCounters((prevState) => {
      return prevState.map((counter) => {
        if (counter.id === id) {
          ++counter.value;
        }
        return counter;
      });
    });
  };
  const handleDecrement = (id) => {
    setCounters((prevState) => {
      return prevState.map((counter) => {
        if (counter.id === id && counter.value - 1 >= 0) {
          --counter.value;
        }
        return counter;
      });
    });
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-sm btn-primary m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};
export default CounterList;
