import './suporte.styles.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMobilePhone } from "@fortawesome/free-solid-svg-icons";

const Suporte = () => {
    return (
        <div id="suporte" style={{marginTop: '50px', position: 'absolute', left: '15%'}}>
            <footer id="suporte">
            <section>
                <div class="row">
                    <div>
                        <p><h1>Contato</h1></p>
                        <p  style={{width: '700px'}}>
                            <a href='mailto: contato@egs.com.br'><FontAwesomeIcon icon={faEnvelope} /> contato@egs.com.br</a>  
                            &nbsp;
                            <a href="https://web.whatsapp.com/send?phone=+5511985105047&amp;text=Olá, gostaria de obter mais informações sobre o sistema." rel="noopener" target="_blank" class="text-dark text-decoration-none"><img src="imagens/whats.png" alt="whatsapp" />&nbsp;41 98773-5047</a>
                            <br/>
                            <FontAwesomeIcon icon={faPhone} /> +55 41 3040-5271
                        </p>
                        <br/>
                        <p style={{width: '700px'}}>
                            <a  href='https://www.facebook.com/profile.php?id=100076218873098' target='_blank'><img src="imagens/face2.png" alt="facebook" /></a>
                            &nbsp;&nbsp;&nbsp;
                            <a  href='https://www.instagram.com/egstecnologiaoficial/' target='_blank'><img src="imagens/instagram.png" alt="instagram" /></a>
                        </p>
                    </div>
                    <div class="col-7 col-sm-7 col-md-7 col-lg-4 pt-6">
                        <p>&nbsp;</p>
                        ©️ 2023 EGS Tecnologia. Todos os direitos reservados.
                    </div>
                </div>
            </section>
        </footer><br/><br/>
    </div>
    )
}

export default Suporte;