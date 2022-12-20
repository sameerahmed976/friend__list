import React, { useState } from "react";
import { data } from "./data/data";
import List from "./List";

const App = () => {
  const [newData, setNewData] = useState(data);

  const clearAll = () => {
    if (newData.length === 0) {
      setNewData(data);
      return;
    }

    setNewData([]);
  };

  // console.log(data);
  return (
    <>
      <main className="main">
        <section className="heading">
          <h1 className="heading__text">
            <span className="total"> {newData.length} </span>Total number of
            friends
          </h1>
        </section>

        <section className="friends__list__container">
          <ul className="friend__list__main">
            <List data={newData} />
          </ul>
          <button className="btn btn--clear" onClick={clearAll}>
            {newData.length === 0 ? "refresh" : "clear all"}
          </button>
        </section>
      </main>
    </>
  );
};

export default App;
