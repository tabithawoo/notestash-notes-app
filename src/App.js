import React,{useEffect,useState} from 'react';
import './App.css';
import {Header,Routes} from './components';
import {getItem,setItem,removeItem,removeSessionItem} from './services/storage.js';

function App() {
  const [noteStash,setNoteStash] = useState([]);

  useEffect(()=>{
    setNoteStash(getItem('notes',[]));
  },[]);

  const clearAllNotes = () => {
    removeItem('notes');
    setNoteStash([]);
  }

  const deleteOneNote = (index) => {
    let newArray = noteStash.filter(note => noteStash.indexOf(note) !== index);
    setNoteStash(newArray);
    setItem('notes',newArray);
}

  const addNote = (title,content) => {
    let note = {title: title, content: content};
    let newArray = Array.from(noteStash);
    newArray.push(note);
    setNoteStash(newArray);
    setItem('notes',newArray);
    removeSessionItem('title');
    removeSessionItem('content');
  }

  const editNote = (index,title,content) => {
    let note = {title: title, content: content};
    let newArray = Array.from(noteStash);
    newArray[index] = note;
    setNoteStash(newArray);
    setItem('notes',newArray);
}

  return (
    <div className="App">
      <Header clearAll={clearAllNotes}/>
      <Routes notes={noteStash} deleteNote={deleteOneNote} addNote={addNote} editNote={editNote}/>
    </div>
  );
}

export default App;
