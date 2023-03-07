import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import menu from "../data";

const allCategories = [
  "all",
  ...new Set(
    menu.map((item) => {
      return item.category;
    })
  ),
];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterCategories = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }
    const newCategories = menu.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newCategories);
  };

  return (
    <main>
      <section className="heading">
        <h1>our menu</h1>
        <div className="heading-underline"></div>
      </section>
        <Categories
          filterCategories={filterCategories}
          categories={categories}
        />
      <section className="menu-container">
        {menuItems.map((item) => {
          return (
            <Menu
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              img={item.img}
              desc={item.desc}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
