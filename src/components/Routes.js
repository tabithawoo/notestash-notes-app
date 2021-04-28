import React from 'react';
import {Add,Edit,Home} from '../pages';
import {Route, Switch, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

export function Routes({notes,deleteNote,addNote,editNote}) {
    const location = useLocation();
    
    return(
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route exact path="/" render={(props) => <Home notes={notes} deleteNote={deleteNote}/>} />
            <Route exact path="/add" render={(props) => <Add addNote={addNote}/>}/>       
            <Route path="/edit/:index" render={(props) => <Edit notes={notes} editNote={editNote}/>}/>
            <Route>Error: page not found.</Route>
        </Switch>
        </AnimatePresence>
    );
}