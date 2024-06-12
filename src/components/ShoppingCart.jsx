import React from "react";

function ShoppingCart({
  shopping,
  handleShopping,
  showSuggetions,
  arr,
  handleClick,
}) {
  return (
    <div className="shoppingCart">
      <h1>My Shopping List</h1>
      <input type="text" value={shopping} onChange={handleShopping} />
      {showSuggetions && (
        <ul className="arrayList">
          {arr.map((item, index) => {
            return (
              <li key={index} onClick={handleClick}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
