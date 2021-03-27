import React, { useEffect, useState } from 'react'
import { Note } from './Note';
import { createNote } from './services/notes/createNote';
import {getAllNotes} from './services/notes/getAllNotes'

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    getAllNotes().then(notas => setNotes(notas));
  }, []);


  const handlerSubmit = (event) => {
    event.preventDefault();
    setError("");

    const noteToAddToState = {
      userId: 1,
      title: newNote,
      body: newNote
    };

    const asincrona = async () => {
      try {
        const data = await createNote(noteToAddToState);
        setNotes(prevNotes => [...prevNotes, data]);
      } catch (error) {
        setError("La api no funciona");
      }
    };
    
    asincrona()
    setNewNote('');
  };

  const handlerChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.map(note => <Note key={note.id} {...note} />)}
      </ol>
      <form onSubmit={handlerSubmit}>
        <input type="text" onChange={handlerChange} value={newNote} />
        <button>Crear nota</button>
      </form>
      {error? error : ""}
    </div>
  )
}

export default App
