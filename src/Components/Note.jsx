import React from "react";
import Notes from "../notes"
function Note() {
  return (Notes.map((note) => {
return (<div className="note">
<h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>);
  }
  )
    
     
  );
}

export default Note;
