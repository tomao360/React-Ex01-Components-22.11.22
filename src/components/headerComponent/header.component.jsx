import React from "react";

import headerPicture from "../images/marvel.jpg";

export const HeaderComponent = (props) => {
  return (
    <>
      <header>
        <img class="image-main" src={headerPicture} alt="" srcset="" />
        <h1>Lorem ipsum dolor sit</h1>
      </header>
      <main>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
          autem, laboriosam minima a error necessitatibus similique quae,
          accusamus, facere deserunt officia tempore ab eum maiores!
        </p>
      </main>
    </>
  );
};
