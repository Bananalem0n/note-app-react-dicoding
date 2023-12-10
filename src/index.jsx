import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles/style.css";
import { getInitialData, showFormattedDate } from "./utils";

const Note = ({ note, onDelete }) => (
  <div key={note.id}>
    <p>{note.id}</p>
    <h2>{note.title}</h2>
    <p>{note.body}</p>
    <p>Created At: {showFormattedDate(note.createdAt)}</p>
    <button onClick={() => onDelete(note.id)}>delete</button>
    <hr />
  </div>
);

const CardList = () => {
  const initialData = getInitialData();
  const [notes, setNotes] = useState(initialData);
  const [newNote, setNewNote] = useState({ title: "", body: "" });
  const [searchQuery, setSearchQuery] = useState("");

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((val) => val.id !== id);
    setNotes(updatedNotes);
  };

  const addNote = (e) => {
    e.preventDefault();
    if (newNote.title && newNote.body) {
      const addedNote = {
        id: +new Date(),
        archived: false,
        createdAt: new Date().toISOString(),
        ...newNote,
      };
      setNotes([...notes, addedNote]);
      setNewNote({ title: "", body: "" });
    }
  };

  const searchNote = (note) => {
    const searchTerm = searchQuery.toLowerCase();
    return note.title.toLowerCase().includes(searchTerm);
  };

  const filteredNotes = notes.filter(searchNote);

  return (
    <>
      <input
        type="text"
        placeholder="Search Notes"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredNotes.map((item) => (
        <Note key={item.id} note={item} onDelete={deleteNote} />
      ))}

      <form onSubmit={addNote}>
        <input
          type="text"
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
        />

        <textarea
          placeholder="Body"
          value={newNote.body}
          onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
        ></textarea>
        <button type="submit">Add Note</button>
      </form>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<CardList />);
