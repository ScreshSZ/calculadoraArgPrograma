import React from 'react'
import '../styles/botones.css'

const Botones = ({ children, manejarClick })=>{



    return(
        <>
        <button 
        className='botones-calculadora'
        onClick={()=> manejarClick(children)}

        >{children}</button>
        
        </>
    )
}

export default Botones