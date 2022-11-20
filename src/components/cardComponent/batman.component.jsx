import React from "react";

import batman from "../images/bat-man.jpg";

export const BatmanComponent = (props) => {
  return (
    <ul>
      <li className="list-item-container">
        <img className="list-image" src={batman} alt="" />
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            excepturi quae incidunt ad pariatur ducimus.
          </p>
        </div>
      </li>
    </ul>
  );
};
