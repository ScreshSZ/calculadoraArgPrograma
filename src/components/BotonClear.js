import React from 'react'
import '../styles/botonClear.css'

const BotonClear = ({  manejarClear })=>{
    return(
        <>
        <button 
        className='botonClear'
        onClick={manejarClear}
        >Clear</button>
        </>
    )
}

export default BotonClear