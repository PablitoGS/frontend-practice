import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const notes = [
  {
    color: "purple",
    registration: "2012-02-03",
    capacity: 7,
  },
  {
    color: "blue",
    registration: "2012-02-03",
    capacity: 7,
  },
  {
    color: "green",
    registration: "2012-02-03",
    capacity: 7,
  },
];

const Note = ({ color, capacity, registration }) => {
  return (
    <li>
      <p>{color}</p>
      <p>{capacity}</p>
      <p>{registration}</p>
    </li>
  );
};

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
  return (
    <>
      <ul>
        {notes.map((note, i) => (
          <Note key={i} {...note} />
        ))}
      </ul>
      <NoteList list={notes} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
