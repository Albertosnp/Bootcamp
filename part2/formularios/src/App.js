import React, { useState } from 'react'
import { Note } from './Note';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  const handlerSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,   
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5 
    } 
    setNotes([...notes, noteToAddToState]);
    setNewNote('');
  };
  const handlerChange = (event) => {
    setNewNote(event.target.value);    
  };
  const handlerShowAll = () => {
    setShowAll(() => !showAll);
  };

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handlerShowAll}>
        {showAll?"Show only important": "Show all"}
      </button>
      <ul>
        { notes
        .filter(note => {
          if(showAll === true) return true;
          return note.important === true;
        })
        .map(note => <Note key={note.id} {...note} /> )}
      </ul>
      <form onSubmit={handlerSubmit}>
          <input type="text" onChange={handlerChange} value={newNote}/>
          <button>Crear nota</button>
      </form>
    </div>
  )
}

export default App 
