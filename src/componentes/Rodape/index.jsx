import './Rodape.css'
import { FaLinkedin } from "react-icons/fa6"


const Rodape = () => {
    return (
        <footer className='footer'>
            <section>
                <ul className='lista'>
                    <li className='listaIcones'>
                        <a href='https://www.linkedin.com/in/joaodedeusrsfilho/'>
                            <img className='linkedin' src='./imagens/linkedin.png'></img>
                        </a>
                        <a href='https://www.facebook.com' target='_blank'>
                            <img src='./imagens/fb.png'></img>
                        </a>
                        <a href='https://twitter.com/' target='_blank'>
                            <img src='./imagens/tw.png'></img>
                        </a>
                        <a href='https://www.instagram.com' target='_blank'>
                            <img src='./imagens/ig.png'></img>
                        </a>
                        
                    </li>
                </ul>
            </section>
            <section>
                <img src='./imagens/logo.png' alt='logo do organo'></img>
            </section>
            <section>
                <p style={{fontWeight:('bold')}}>
                    Desenvolvido por João de Deus
                </p>
            </section>
        </footer>
    )
}

export default Rodape