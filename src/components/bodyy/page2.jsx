// App.js
import React from "react";
import Card from "./card";
import "./page2.css";

const Pagee2 = () => {
  return (
    <section id="cards" className="app">
      <Card
        title="Card 1"
        content="Commodo laboghgjrum eiusmod labore proident do minim occaecat ex."
      />
      <Card
        title="Card 2"
        content="Est proident et consequat ut ea Lorem velit sit quis."
      />
      <Card
        title="Card 3"
        content="Amet amet deserunt exercitation esse eu minim adipisicing velit adipisicing nostrud dolore."
      />
    </section>
  );
};

export default Pagee2;
