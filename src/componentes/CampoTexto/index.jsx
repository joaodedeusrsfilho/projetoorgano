import { useState } from 'react'
import './CampoTexto.css'

/* formulario é o pai do CampoTexto */
const CampoTexto = ({label, valor, aoInserirDadosInput,obrigatorio,placeholder}) => {

   // let valor = ''


    /*const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value)//o campo texto esta delegando o controle do estado para quem for usar ele, ele em sí não vai controlar o estado dele.
        console.log(valor)
    }*/


    return (
        <div className='campo-texto'>
            <label>{label}</label>
            {/**o campo de texto esta delegando o controle do estado para quem for usar ele, ele em sí não vai contrar o estado dele mesmo*/}
            <input
                value={valor}
                onChange={valorTeclado => aoInserirDadosInput(valorTeclado.target.value)}
                required={obrigatorio}
                placeholder={placeholder}>
            </input>
        </div>
    )
}

export default CampoTexto