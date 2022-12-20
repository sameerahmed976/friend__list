import React from "react";

const List = ({ data }) => {
  return (
    <>
      {data.map(({ name, image, id, age }) => {
        return (
          <li className="friend__list" key={id}>
            <img
              src={image}
              alt="image"
              className="friend__image"
              loading="lazy"
            />
            <article className="friend__text">
              <h1 className="friend__name">{name}</h1>
              <p className="friend__age">{age}</p>
            </article>
          </li>
        );
      })}
    </>
  );
};

export default List;
