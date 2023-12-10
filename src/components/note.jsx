import React from "react";
import { showFormattedDate } from "../utils";
import "../styles/note.css"; // Import the CSS file for styling

const Note = ({ note, onDelete, onToggleArchive }) => (
  <div className="note-card" key={note.id}>
    <h2 className="note-title">{note.title}</h2>
    <p className="note-body">{note.body}</p>
    <p className="note-date">Created At: {showFormattedDate(note.createdAt)}</p>
    <div className="button-group">
      <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
      </button>
      <button
        className="archive-button"
        onClick={() => onToggleArchive(note.id)}
      >
        {note.archived ? "Unarchive" : "Archive"}
      </button>
    </div>
  </div>
);

export default Note;
