import React from "react";

import spiderman from "../images/spider-man.jpg";

export const SpidermanComponent = (props) => {
  return (
    <ul>
      <li className="list-item-container">
        <img className="list-image" src={spiderman} alt="" srcset="" />
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
