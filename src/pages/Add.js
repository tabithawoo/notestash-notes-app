import React,{useEffect,useState} from 'react';
import './styles/add.css';
import {getSessionItem, setSessionItem} from '../services/storage.js';
import {useHistory} from 'react-router-dom';
import {motion} from 'framer-motion';

export function Add({addNote}) {
    let history = useHistory();
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    
    useEffect(() => {
        setTitle(getSessionItem('title',''));
        setContent(getSessionItem('content',''));
    },[]);

    const onTitleChange = (event) => {
        let value = event.target.value;
        setTitle(value);
        setSessionItem('title',value);
    };
    const onContentChange = (event) => {
        let value = event.target.value;
        setContent(value);
        setSessionItem('content',value);
    };

    const onSubmitClick = () => {
        addNote(title,content);
        history.push('/');
    }

    return(
        <div className='addContainer'>
            <motion.div 
                className='addForm'
                initial={{opacity: 0, x: '100vw'}} 
                animate={{opacity: 1, x: '0'}} 
                exit={{opacity: 0, x: '100vw'}} 
                transition={{
                    ease: 'linear',
                    duration: 0.3,
            }}>
            <h2>Add a note to your stash</h2>
            <div className='formSection'>
            <label>
                <p>Title</p>
                <input className='formInput' value={title} onChange={onTitleChange}/>
            </label>
            </div>
            <div className='formSection'>
            <label>
                <p>Content</p>
                <textarea className='formInput' value={content} onChange={onContentChange} rows={10}/>
            </label>
            </div>

            <button className='submitButton' onClick={onSubmitClick}>Submit</button>
            </motion.div>
        </div>
    );
}