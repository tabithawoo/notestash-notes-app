import React,{useEffect,useState} from 'react';
import './styles/edit.css';
import {useHistory,useParams} from 'react-router-dom';
import {motion} from 'framer-motion';

export function Edit({notes,editNote}) {
    let history = useHistory();
    let {index} = useParams();
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    
    useEffect(() => {
        if(notes[index])
        {
            setTitle(notes[index].title);
            setContent(notes[index].content);
        }
        else{
            history.push('/');
        }
    },[]);

    const onTitleChange = (event) => {
        let value = event.target.value;
        setTitle(value);
    };
    const onContentChange = (event) => {
        let value = event.target.value;
        setContent(value);
    };

    const onSaveClick = () => {
        editNote(index,title,content);
        history.push('/')
    }

    return(
        <div className='editContainer'>
            <motion.div 
                className='editForm' 
                initial={{opacity: 0, x: '-100vw'}} 
                animate={{opacity: 1, x: '0'}} 
                exit={{opacity: 0, x: '-100vw'}} 
                transition={{
                    ease: 'linear',
                    duration: 0.3,
                }}>
            <h2>Edit your note</h2>
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
            <button className='saveButton' onClick={onSaveClick}>Save Changes</button>
            </motion.div>
        </div>
    );
}