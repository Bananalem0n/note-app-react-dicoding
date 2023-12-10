// CardList.js
import React, { useState } from "react";
import "../styles/style.css"; // Import styles from utils folder
import { getInitialData } from "../utils/index";
import Note from "./note";
import SearchBar from "./searchBar";
import TitleInput from "./titleInput";
import BodyTextArea from "./bodyTextArea";
import "../styles/note.css";

const CardList = () => {
  const initialData = getInitialData();
  const [notes, setNotes] = useState(initialData);
  const [newNote, setNewNote] = useState({ title: "", body: "" });
  const [searchQuery, setSearchQuery] = useState("");
  const [titleLimit, setTitleLimit] = useState(50);

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((val) => val.id !== id);
    setNotes(updatedNotes);
  };

  const toggleArchive = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNotes(updatedNotes);
  };

  const handleTitleChange = (e) => {
    const inputTitle = e.target.value;
    if (inputTitle.length <= 50) {
      setNewNote({ ...newNote, title: inputTitle });
      setTitleLimit(50 - inputTitle.length);
    }
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
      setTitleLimit(50); // Reset title limit after adding a note
    }
  };

  const searchNote = (note) => {
    const searchTerm = searchQuery.toLowerCase();
    return note.title.toLowerCase().includes(searchTerm);
  };

  const filteredNotes = notes.filter(searchNote);

  const nonArchivedNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  return (
    <>
      <div className="title header">
        <h1>Notely</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>

      <form className="input-container" onSubmit={addNote}>
        <TitleInput
          value={newNote.title}
          onChange={handleTitleChange}
          titleLimit={titleLimit}
        />

        <BodyTextArea
          value={newNote.body}
          onChange={(value) => setNewNote({ ...newNote, body: value })}
        />

        <button type="submit">Add Note</button>
      </form>

      <div className="card-collection">
        <h2>Non-Archived Notes</h2>
        {nonArchivedNotes.map((item) => (
          <Note
            key={item.id}
            note={item}
            onDelete={deleteNote}
            onToggleArchive={toggleArchive}
          />
        ))}

        <h2>Archived Notes</h2>
        {archivedNotes.map((item) => (
          <Note
            key={item.id}
            note={item}
            onDelete={deleteNote}
            onToggleArchive={toggleArchive}
          />
        ))}
      </div>
    </>
  );
};

export default CardList;
