import React from "react";

const Counter = (props) => {
  const { value, onIncrement, onDecrement, id } = props;
  // const [value, setValue] = useState(props.value);

  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };
  const getBadgeClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button
        className="btn btn-sm btn-primary m-2"
        onClick={() => onIncrement(id)}
      >
        +
      </button>
      <button
        className="btn btn-sm btn-primary m-2"
        onClick={() => onDecrement(id)}
      >
        -
      </button>
      <button
        className="btn btn-sm btn-danger m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Удалить
      </button>
    </div>
  );
};

export default Counter;
