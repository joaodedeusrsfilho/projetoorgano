import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from './componentes/Formulario';
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";





function App() {


  const [colaboradores, setColaboradores] = useState([])//array de dados

  //salvando na lista dos colaboradores, fala o seguinte, crie um novo array []
  //e coloque no primeiro valor o seguinte codigo: ...colaboradores para indicar os dados que já existem no array, e depois coloque o novo array que está sendo incluido agora que no caso é: dadosColaborador
  const salvarColaborador = (dadosColaborador) => {
    
    setColaboradores([...colaboradores, dadosColaborador])

  }

  //criando lista de time
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobbile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  return (
    <div className="App">
      <Banner />
      <Formulario
        nomeTimes={times.map(timeAtual => timeAtual.nome)}

        aoCadastrarColaborador={dadosColaborador => salvarColaborador(dadosColaborador)}
      />

      {/**vamos colocar o componente Time aqui abaixo do formulario*/}

      {times.map(timeAtual => <Time
        /**a propriedade key é para controlar a renderização individual de cada elemento do array */
        key={timeAtual.nome}
        nomeTime={timeAtual.nome}
        corPrimaria={timeAtual.corPrimaria}
        corSecundaria={timeAtual.corSecundaria}
        /* se o colaborador tiver o nome do seu time igual o nome de time da lista de time, seu card sera mostrado no card igual ao seu time*/
        colaborador={colaboradores.filter(colaboradorAtual => colaboradorAtual.time === timeAtual.nome)} />)}
      <Rodape/>

    </div>
  );
}
export default App
