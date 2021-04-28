import React from 'react';
import './styles/home.css';
import {useHistory} from 'react-router-dom';
import {Row} from '../components';

export function Home({notes,deleteNote}) {
    let history = useHistory();

    const onAddClick = () => {
        history.push('/add');
    }

    return(
        <div className='homeContainer'>
            <div>
                {notes.map((n,index)=>{
                    return(
                        <Row key={index} title={n.title} content={n.content} index={index} onDeleteClick={deleteNote} />
                    )
                })
                }
            </div>
            <button className='addButton' onClick={onAddClick}>+ New Note</button>
        </div>
    );
}