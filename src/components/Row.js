import React from 'react';
import './styles/row.css';
import {useHistory} from 'react-router-dom';

export function Row({title,content,index,onDeleteClick}) {
    let history = useHistory();
    const deleteNote=()=>{
        onDeleteClick(index);
    }

    const editNote=()=>{
        history.push('/edit/'+index);
    }
    return(
        <div className='rowContainer'>
            <div className='noteText'>
                <p><span className='noteTitle'>{title}:</span> {content}</p>
            </div>
            <div>
            <button className='editButton' onClick={editNote}>Edit</button>
            <button className='deleteButton' onClick={deleteNote}>Delete</button>
            </div>           
        </div>
    );
}