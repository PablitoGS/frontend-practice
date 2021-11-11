import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const NoteList = ({ list }) => {
  return (
    <ul>
      {list.map(({ title, body, id }) => (
        <li key={id}>
          <p>{title}</p>
          <p>{body}</p>
        </li>
      ))}
    </ul>
  );
};

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setNotes(json);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleClick = (e) => {
    const nota = {
      id: notes.length + 1,
      title: newNote,
      body: newNote,
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
      {loading ? <h1>....loading</h1> : <NoteList list={notes} />}
      <div>
        <input type="text" value={newNote} onChange={handleChange} />
        <button onClick={handleClick}>Crear nota</button>
      </div>
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
