import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Wrapper from "../../Helpers/Wrapper";
import styles from './Hair.module.css'
let counter = 0;
const Hair = () =>{
    const hairStyles = ['long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob'];
    const arrowNext = require('../../Media/right-arrow.png');
    const arrowPrev = require('../../Media/left-arrow.png');
    const dispatch = useDispatch();
    const [counterBig, setCounterBig] = useState(false);
    const [counterSmall, setCounterSmall] = useState(true);
    const nextHandler = (event) => {
        event.preventDefault();
        if(counter < hairStyles.length-1){
            if(counter === hairStyles.length-1){
                setCounterBig(true);
                console.log('limit');
            }
            else{
                setCounterBig(false);
            }
            counter += 1; 
            if(counter > 0){
                setCounterSmall(false);
            }
            console.log(counter);
            console.log(hairStyles[counter]);
            dispatch({type: 'hairStyle',hairStyle: hairStyles[counter]})
        }
    };
    const previousHandler = (event) => {
        event.preventDefault();
        if(counter > 0){
            if(counter === 0){
                setCounterSmall(true);
                console.log('limit');
            }
            else{
                setCounterSmall(false);
            }
            counter -= 1; 
            if(counter < hairStyles.length-1){
                setCounterBig(false);
            }
            console.log(counter);
            console.log(hairStyles[counter]);
            dispatch({type: 'hairStyle',hairStyle: hairStyles[counter]})
        }
    }
    
    return (
        <Wrapper>
            <div className={styles.hairPicker}>
                <button  onClick={previousHandler} disabled={counterSmall}><img src={arrowPrev} alt="" /></button>
                <span>Hair Style</span>
                <button onClick={nextHandler} disabled={counterBig}><img src={arrowNext} alt="" /></button>
            </div>
        </Wrapper>
    )

}

export default Hair;