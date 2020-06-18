import React from 'react';
import '../App.css';


const CharacterCard = (props) => {
    console.log(props)
    return(
        <div className='card'>
        <div className='text'>
        <h1>{props.name}</h1>
        <span><h2> {props.status} - {props.species}</h2></span> 
        <h2>Location: {props.location}</h2>
        </div>

        <img className='pic' src={props.image}/>
        </div>
        
    )
}

export default CharacterCard;