import React from "react";
import {Note} from './Note';

const App = ({ notes }) => {
  if (typeof notes === "undefined" || notes.lenght === 0)
    return "No hay notas que mostrar";

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((nota) => <Note key={nota.id} content={nota.content} date={nota.date} />)}
      </ul>
    </div>
  );
};

export default App;
