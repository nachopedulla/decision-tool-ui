import React, { useState } from 'react'
import Option from '../option/Option'
import { GrLinkNext } from 'react-icons/gr'
import { toast, ToastContainer } from 'react-toastify';
import gif from '../../assets/giphy.gif'
import "react-toastify/dist/ReactToastify.css";
import './Chooser.css'

const Chooser = () => {
    
    let [options, setOptions] = useState(['', ''])
    let [result, setResult] = useState(undefined)

    const textChangeHandler = (id, value) => {
        const aux = [...options]
        aux[id] = value
        setOptions(aux)
    }

    const sort = () => {
        if (options.some(option => option === '')) {
            toast.error('Se deben ingresar ambas opciones para sortear')
            return
        }
        const index = Math.floor(Math.random() * 2);
        setResult(options[index])
    }

    const cleanUp = () => {
        setResult(undefined)
        setOptions(['', ''])
    }

    return (
        <div className='adder'>
            {result === undefined && (
                <>
                    <Option id={0} options={options} changeHandler={textChangeHandler}/>
                    <Option id={1} options={options} changeHandler={textChangeHandler}/>
                    <div 
                        className='add-button' 
                        onClick={sort}
                    >
                        Sortear 
                        <GrLinkNext/>
                    </div>
                </>
            )}
            { result && (
                <div className='result'>
                    <h5>Ganador</h5>
                    <div className='option-result'>{result}</div> 
                    <img className='gif' src={gif} alt="loading..." />
                    <div className='add-button' onClick={cleanUp}>
                        Reiniciar
                        <GrLinkNext disabled={options.some(option => option === '')}/>
                    </div>
                </div>
            )} 
            <ToastContainer />
        </div>
    )   
}

export default Chooser