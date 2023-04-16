//import { useState, useEffect } from 'react'

import './Btn.css'

const Button = (props) => {

    const datos = false;
    const handleClick = () => {

        if (datos) {

            alert(JSON.stringify(datos));
        } else {
            alert('Falta Programar :D ');
        }

    }

    return (
        <>
            <button
                className='btn'
                onClick={handleClick}
            >{props.text}
            </button>
        </>)
}
export default Button