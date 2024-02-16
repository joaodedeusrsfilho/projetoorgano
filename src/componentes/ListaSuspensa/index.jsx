import './ListaSuspensa.css'

/* Formulario é o pai da ListaSuspensa */
const ListaSuspensa = ({ label, aoEscolherDadosLista, campoObrigatorio, itensNomesLista, valor }) => {
    return (
        <div className='listaSuspensa'>
            <label>{label}</label>
            <select
                onChange={timeEscolhido => aoEscolherDadosLista(timeEscolhido.target.value)}

                //value={props.timeEscolhidoLista} 

                required={campoObrigatorio}
                value={valor}
            >
                {/**campo obrigatório */}
                {/**funcão .map() percorre cada item da lista e devolve esse item em um novo tipo de dado no caso em option, para ser inserido dentro do select assim criando a lista para o usuário final */}

                <option value={""}></option>{/**para o primeiro campo de time ser vazio forçando o usuario clicar para escolhar seu time */}
                
                {itensNomesLista.map(timeAtualNome => <option key={timeAtualNome}>{timeAtualNome}</option>)}

            </select>
        </div>
    )
}

export default ListaSuspensa