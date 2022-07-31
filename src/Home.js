import React, { useState } from "react";
import MOCK_DATA from "./MOCK_DATA";
import List from "./List";
import ListOfAll from "./ListOfAll";

function Home() {
  const [people, setPeople] = useState(MOCK_DATA);
  const [btn, setBtn] = useState(false);

  const clickHandler = () => {
    setPeople(MOCK_DATA);
    if (btn === false) {
      setBtn(true);
    } else {
      setBtn(false);
    }
  };
  return (
    <>
      <main>
        <section className="container">
          <h3>
            {btn && people.length > 0
              ? "All Of The Friends"
              : "Friends' birthdays today"}
          </h3>
          {btn ? <ListOfAll people={people} /> : <List people={people} />}
          <button onClick={() => clickHandler()}>
            {btn ? "Return To Friends' Birthdays" : "Show All Friends"}
          </button>
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
    </>
  );
}

export default Home;
