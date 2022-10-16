import React from "react";
import "../home/mainContent/homes/style.css";

import Side from "../home/sideContent/side/Side";

// import NewsList from "../News/NewsList"
import NewsList from "./NewsList";

const Sports = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="content">
            <NewsList className="txt" />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Sports;
