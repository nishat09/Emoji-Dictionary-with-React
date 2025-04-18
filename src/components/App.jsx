import React, { useState } from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function App() {
  const [entries, setEntries] = useState(emojipedia);
  const [newCard, setNewCard] = useState({
    emoji: "",
    name: "",
    meaning: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewCard((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function addCard(event) {
    event.preventDefault();
    if (!newCard.emoji || !newCard.name || !newCard.meaning) return;

    const newEntry = {
      id: entries.length + 1,
      ...newCard
    };

    setEntries((prev) => [newEntry, ...prev]);
    setNewCard({ emoji: "", name: "", meaning: "" });
  }

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <form onSubmit={addCard} className="form">
        <input
          name="emoji"
          type="text"
          placeholder="Emoji"
          value={newCard.emoji}
          onChange={handleChange}
        />
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={newCard.name}
          onChange={handleChange}
        />
        <input
          name="meaning"
          type="text"
          placeholder="Meaning"
          value={newCard.meaning}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      <dl className="dictionary">
        {entries.map((item) => (
          <Card
            key={item.id}
            emoji={item.emoji}
            name={item.name}
            meaning={item.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
