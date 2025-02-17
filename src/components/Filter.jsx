import React from "react";

function Filter({ dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "SET_FILTER", filter: "all" })}>
        All Tasks
      </button>
      <button
        onClick={() => dispatch({ type: "SET_FILTER", filter: "completed" })}
      >
        Completed
      </button>
      <button onClick={() => dispatch({ type: "SET_FILTER", filter: "active" })}>
        Active
      </button>
    </div>
  );
}

export default Filter;
