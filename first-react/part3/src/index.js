import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const notes = [
  {
    color: "purple",
    registration: "2012-02-03",
    capacity: 7,
  },
];

const NoteList = ({ list }) => {
  return (
    <ul>
      {list.map(({ color, capacity, registration }) => (
        <li key={color}>
          <p>{color}</p>
          <p>{capacity}</p>
          <p>{registration}</p>
        </li>
      ))}
    </ul>
  );
};

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleClick = (e) => {
    const nota = {
      color: newNote,
      registration: "2012-02-03",
      capacity: 10,
    };
    setNotes([...notes, nota]);
  };

  return (
    <>
      {/* <ul>
        {notes.map((note, i) => (
          <Note key={i} {...note} />
        ))}
      </ul> */}
      <NoteList list={notes} />
      <div>
        <input type="text" value={newNote} onChange={handleChange} />
        <button onClick={handleClick}>Crear nota</button>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>,
  document.getElementById("root")
);
