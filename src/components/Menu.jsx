import React from "react";

function Menu(props) {
  return (
    <article className="menu-item">
      <img className="menu-img" src={props.img} alt={props.title} />
      <div className="menu-copy">
        <div className="menu-title">
          <h4>{props.title}</h4>
          <h3>${props.price}</h3>
        </div>
        <p className="menu-description">{props.desc}</p>
      </div>
    </article>
  );
}

export default Menu;
