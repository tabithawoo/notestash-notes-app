import React from 'react';
import './styles/header.css';
import { motion } from 'framer-motion';
import HeaderImage from '../images/headerimage.png';
import {useHistory} from 'react-router-dom';


export function Header({clearAll}) {
    let history = useHistory();
    
    const onHomeClick = () => {
        history.push('/');
    }

    const onClearAll = () => {
        clearAll();
        history.push('/');
    }
    return(
        <div className='headerContainer'>
            <div className='headerBranding' onClick={onHomeClick}>
            <h1 className='brandingText'>Note<span className='stash'>Stash</span></h1>
            <motion.div
                initial={{
                    rotate: 0
                }}
                whileHover={{
                    rotate: [10,-10,20,-5,10],
                    transition: {
                        duration: 0.6,
                        loop: Infinity,
                        ease: 'easeOut'
                    }
                }}
                whileTap={{
                    rotate: [10,-10,20,-5,10],
                    transition: {
                        duration: 0.7,
                        loop: 1,
                        ease: 'easeOut'
                    }
                }}
                
                animate={{
                    rotate: 0
                }}
            ><img className='headerImage' src={HeaderImage} alt='A black moustache'/></motion.div>
            </div>
            <button className='clearButton' onClick={onClearAll}>Clear All Notes</button>

        </div>
    );
}