import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')//useState (alterar o estado) retorna dois valores, um valor em sí e um set para alterar o valor
    const [cargo, setCargo] = useState('')//useState (alterar o estado) retorna dois valores, um valor em sí e um set para alterar o valor
    const [imagem, setImagem] = useState('')//useState (alterar o estado) retorna dois valores, um valor em sí e um set para alterar o valor
    const [time, setTime] = useState('')//useState (alterar o estado) retorna dois valores, um valor em sí e um set para alterar o valor

    const aoClicarSalvar = (evento) => {
        evento.preventDefault()//para o formulario não recarregar após clicar no botão do formulario

        //enviando os dados do formulario para a propriedade aoCadatrarColaboradores
        props.aoCadastrarColaborador({//pertence ao app.js
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        
    }

    return (
        <section className="sectionFormulario">
            <form onSubmit={aoClicarSalvar}>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    aoInserirDadosInput={valorDigitadoInput => setNome(valorDigitadoInput)}
                    //aoInserirDadosInput recebendo o valor do evento vindo do input pelo onChange
                    valor={nome}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    aoInserirDadosInput={valorDigitadoInput => setCargo(valorDigitadoInput)}
                    valor={cargo}
                />

                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    aoInserirDadosInput={valorTeclado => setImagem(valorTeclado)}
                    valor={imagem}

                />

                <ListaSuspensa
                    label="Escolha seu time"
                    aoEscolherDadosLista={timeEscolhidoSelect => setTime(timeEscolhidoSelect)}
                    //timeEscolhidoLista={time}
                    campoObrigatorio={true}
                    itensNomesLista={props.nomeTimes}//props vindo do componente Formulario em App.js
                    valor={time}

                />
                <Botao>
                    Criar Time{/**children la no camponente */}
                </Botao>
            </form>
        </section>
    )
}
export default Formulario