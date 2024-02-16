import Colaborador from '../Colaborador'
import './Time.css'

/**o app.js é o pai do time */
const Time = ({ nomeTime, corPrimaria, corSecundaria, colaborador }) => {
    return (

        (colaborador.length > 0) ? <section className='time' style={{ backgroundColor: corSecundaria }}>
            <h3 style={{ borderColor: corPrimaria }}>
                {nomeTime}
            </h3>
            <div className='colaboradores'>
                {colaborador.map(colaborador => <Colaborador corDeFundo={corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
            : ''
    )
}
export default Time