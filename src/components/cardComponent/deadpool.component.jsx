import React from "react";

import deadpool from "../images/iron-man.jpg";

export const DeadpoolComponent = (props) => {
  return (
    <ul className="list-style">
      <li className="list-item-container">
        <img className="list-image" src={deadpool} alt="" srcset="" />
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
