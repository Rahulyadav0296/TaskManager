import React from "react";

function ResultCart({ result, setResult }) {
  function handleDelete(targetIndex) {
    const newResult = result.filter((item, index) => index !== targetIndex);
    console.log(newResult);
    setResult(newResult);
  }

  function handleChecked(targetIndex) {
    const newResult = result.filter((item, index) => index === targetIndex);
    console.log(newResult);
  }
  return (
    <div className="centerContainer">
      <div className="selectedItem">
        <h2>Selected Items:</h2>
        <ul>
          {result.map((item, index) => (
            <li key={index}>
              <button
                className="button"
                onClick={() => {
                  handleChecked(index);
                }}
              >
                <i className="fa-solid fa-check"></i>
              </button>
              <span>{item}</span>
              <button onClick={() => handleDelete(index)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResultCart;
