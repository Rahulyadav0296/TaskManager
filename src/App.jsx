import React, { useEffect, useState } from "react";
import ResultCart from "./components/ResultCart";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [shopping, setShopping] = useState("");
  const [arr, setArr] = useState([]);
  const [showSuggetions, setShowSuggestions] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (shopping.length >= 2 && shopping.startsWith("mi"))
      fetch("https://api.frontendeval.com/fake/food/mi")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setArr(data);
          setShowSuggestions(true);
        });
    else {
      setArr([]);
      setShowSuggestions(false);
    }
  }, [shopping]);

  function handleClick(event) {
    const clickedContent = event.target.textContent;
    console.log(clickedContent);
    setResult([...result, clickedContent]);
    setShowSuggestions(false);
    setShopping("");
  }

  function handleShopping(event) {
    setShopping(event.target.value);
  }

  return (
    <>
      <ShoppingCart
        shopping={shopping}
        handleShopping={handleShopping}
        showSuggetions={showSuggetions}
        arr={arr}
        handleClick={handleClick}
      />
      <ResultCart result={result} setResult={setResult} />
    </>
  );
}

export default App;
