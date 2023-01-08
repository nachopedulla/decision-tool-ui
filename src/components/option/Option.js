import React from 'react';
import './Option.css'


const Option = ({options, id, changeHandler}) => (
    <div className='option'>
        <p className='option-title'>{`Opción ${id + 1}`}</p>
        <input 
            type='text'
            className='text-area'
            value={options[id]} 
            onChange={(event) => changeHandler(id, event.target.value)}
        />
    </div>
)

export default Option