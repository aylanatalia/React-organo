import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = ({ type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false}) => {
   

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo-texto campo-texto-${type}`}>
            <label>
                {label}
            </label>
            <input type={type} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder= {placeholder} />
        </div>
    )
} //outro método de escrever o camponente no react

export default CampoTexto