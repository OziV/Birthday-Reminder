import React, { useState } from "react";

const List = ({ people }) => {
  const isBirthdayToday = (day_of_birth) => {
    let result;
    const birthday = new Date(day_of_birth);
    const dayOfBirth = birthday.getDate();
    const monthOfBirth = birthday.getMonth();
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    if (day === dayOfBirth && month === monthOfBirth) {
      result = true;
    } else {
      result = false;
    }
    return result;
  };

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
            {isBirthdayToday(day_of_birth) ? (
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
            ) : (
              ""
            )}
          </div>
        );
      })}
    </>
  );
};

export default List;
