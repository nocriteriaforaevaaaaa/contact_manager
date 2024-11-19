import React from "react";
import Contact from "./Components/Contact";
import "./styles/app.css";

const App = () => {
  const contacts = [
    {
      name: "Aeva",
      number: "9887654321",
      location: "Ktm",
    },

    {
      name: "Aaru",
      number: "9812345678",
      location: "Ltp",
    },

    {
      name: "Aamu",
      number: "9822233334",
      location: "Bkt",
    },
  ];

  return (
    <>
      <div className="container">
        <h3>Contact List</h3>
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
      </div>
    </>
  );
};

export default App;
