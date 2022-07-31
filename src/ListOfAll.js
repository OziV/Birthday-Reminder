import React from "react";

const ListOfAll = ({ people }) => {
  const ageCalculator = (day_of_birth) => {
    const personDateObject = new Date(day_of_birth);
    const currentDateObject = new Date();
    let gap = currentDateObject - personDateObject;
    const years = gap / (365 * 24 * 60 * 60 * 1000);
    return Math.round(years);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name, gender, day_of_birth, Avatar } = person;
        return (
          <div>
            <article key={id} className="person">
              <img src={Avatar} alt={name} />
              <div>
                <h4>{name}</h4>
                <h5>{gender}</h5>
                <p>
                  {ageCalculator(day_of_birth)} years | {day_of_birth}
                </p>
              </div>
            </article>
          </div>
        );
      })}
    </>
  );
};

export default ListOfAll;
