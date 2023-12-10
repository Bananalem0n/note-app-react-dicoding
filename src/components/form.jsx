import React from "react";

export const Form = ({ addNote, newNote, setNewNote }) => (
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
);
