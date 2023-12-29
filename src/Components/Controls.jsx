import { useDispatch } from "react-redux";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  return (
    <div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          onClick={handleIncrement}
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
        >
          +1
        </button>
        <button
          onClick={handleDecrement}
          type="button"
          className="btn btn-success btn-lg px-4"
        >
          -1
        </button>
        <button
          onClick={handlePrivacyToggle}
          type="button"
          className="btn btn-warning"
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid mt-3 gap-2 d-sm-flex justify-content-sm-center">
        <input type="text" placeholder="Enter Number" ref={inputElement} />
        <button onClick={handleAdd} type="button" className="btn btn-info">
          Add
        </button>
        <button
          onClick={handleSubtract}
          type="button"
          className="btn btn-danger"
        >
          Subtract
        </button>
      </div>
    </div>
  );
};

export default Controls;
