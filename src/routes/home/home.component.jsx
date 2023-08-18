import { Outlet } from 'react-router';
import Directory from '../../components/directory/directory.component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faChartColumn, faChartArea, faChartPie, faDesktop } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../components/Banner";
import Slider from "../../components/Slider";
import Suporte from '../suporte/suporte.component';

import './home.styles.scss';

const Home = () => {
  return (
    <div style={{lineHeight: '32px', marginTop: '20px', textAlign: 'center'}}>
      <div className="wrapper">
        {/* <Banner /> */}
        <div className="container">&nbsp;
          <Slider />
        </div>
      </div>
      <div><br/><br/><br/>
      <div style={{alignItem: 'center', textAlign: 'center', marginTop: '10px'}} id="clientes">
        <table width='100%'>
          <tbody>
            <tr><th colSpan="3"><h1>Automatizando negócios no Brasil inteiro.</h1></th></tr>
            <tr><th colSpan="3"><h2>Mais de 1.000 contratos em dezenas de estados registrados com a EGS.</h2></th></tr>
            <tr><td><img src="imagens\grocery1.jpg" alt=""  width="90%" /></td><td><img src="imagens\grocery2.jpg" alt="" width="90%" /></td><td><img src="imagens\grocery3.jpg" alt="" width="90%" /></td></tr>
          </tbody>
        </table>
       </div>
      </div><br/><br/>
      <div id="solutions" style={{alignItem: 'center', textAlign: 'center', marginTop: '20px'}}>
        <span style={{color: '#ff6600', fontWeight: 'normal', textAlign: 'center'}}>SOLUÇÕES</span>
        <div>
          <h2 style={{
            fontWeight: 'bold',
            fontFamily: 'Helvetica'
          }}>
            O que um sistema para supermercado faz para<br/>varejistas como você
          </h2>
          <div className="serv">
          <ul>
            <li>
                <div className='divCard'>
                  <h1><FontAwesomeIcon icon={faDesktop} /></h1>
                  <b style={{fontWeight: 'bold'}}>Agilizamos o frente de loja</b>
                  <p style={{fontFamily: 'Helvetica'}}>Agilize e simplifique o atendimento do seu PDV e integre suas vendas com faturamento, cobrança e estoque. Tenha mais flexibilidade nas formas de pagamento. Ganhe mais agilidade na emissão de cupom fiscal e NFC-e.</p>
                </div>
              </li>
              <li>
                <div className='divCard'>
                  <h1><FontAwesomeIcon icon={faChartColumn} /></h1>
                  <b style={{fontWeight: 'bold'}}>Controlamos o estoque</b>
                  <p style={{fontFamily: 'Helvetica'}}>Economize tempo com uma contagem de estoque mais rápida. Reduza prejuízos com perdas de mercadorias. Otimize seu processo de compras, sabendo quanto comprar ou quando repor o estoque.</p>
                </div>
              </li>
              <li>
                <div className='divCard'>
                  <h1><FontAwesomeIcon icon={faChartBar} /></h1>
                  <b style={{fontWeight: 'bold'}}>Visão detalhada das vendas</b>
                  <p style={{fontFamily: 'Helvetica'}}>Acompanhe o faturamento das suas vendas em tempo real. Saiba quais são os seus produtos que vendem mais e aqueles que estão parados. Analise as vendas por categoria de produtos, ticket médio e faixa de horário.</p>
                </div>
              </li>
              <li>
                <div className='divCard'>
                  <h1><FontAwesomeIcon icon={faChartArea} /></h1>
                  <b style={{fontWeight: 'bold'}}>Diminuimos o desperdício</b>
                  <p style={{fontFamily: 'Helvetica'}}>Conheça os custos de produzir seus produtos. Diminua o desperdício de insumos e padronize o modo de preparo. Tenha mais controle de tudo o que acontece na sua produção.</p>
                </div>
              </li>
              <li>
                <div className='divCard'>
                  <h1><FontAwesomeIcon icon={faChartPie} /></h1>
                  <b style={{fontWeight: 'bold'}}>Controlamos suas compras</b>
                  <p style={{fontFamily: 'Helvetica'}}>Monitore seus produtos e compre somente o que é necessário. Simplifique seu processo de compra com o assistente de pedido. Crie leilões de compras para selecionar os melhores fornecedores.</p>
                </div>
              </li>
              <li>
                <div className='divCard'>
                  <h1><FontAwesomeIcon icon={faChartColumn} /></h1>
                  <b style={{fontWeight: 'bold'}}>Tiramos você da informalidade</b>
                  <p style={{fontFamily: 'Helvetica'}}>Gaste menos tempo com a burocracia contábil. Mantenha suas obrigações fiscais atualizadas. Automatize o envio de documentos para seu contador. Tenha mais segurança nas informações e diminua o risco com multas e autuações.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div><br/><br/>
      <div  style={{alignItem: 'center', textAlign: 'center', marginTop: '20px'}} id="about">
        <span style={{color: '#ff6600', fontWeight: 'normal', textAlign: 'center'}}>SOBRE NÓS</span><br/>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
        </span>
        <div style={{display: 'flex'}} className="rodape">
        <table style={{backgroundColor: '#e8f5e9', marginRight: '20px'}}>
          <tr>
            <th style={{fontWeight: 'bold', padding: '0 15px 0 15px'}}>Missão</th>
          </tr>
          <tr>
            <td style={{fontFamily: 'Helvetica', fontSize: '15px'}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
            </td>
          </tr>
        </table>
        <table  style={{backgroundColor: '#e8f5e9', marginRight: '20px'}}>
            <tr>
              <th style={{fontWeight: 'bold', padding: '0 15px 0 15px'}}>Visão</th>
            </tr>
            <tr>
              <td style={{fontFamily: 'Helvetica', fontSize: '15px'}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
                orem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
                orem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
                orem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
                orem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
              </td>
            </tr>
        </table>
        <table  style={{backgroundColor: '#e8f5e9'}}>
          <tr>
            <th style={{fontWeight: 'bold', padding: '0 15px 0 15px'}}>Valores</th>
          </tr>
          <tr>
            <td style={{fontFamily: 'Helvetica', fontSize: '15px'}}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?
            </td>
          </tr>
        </table>
        </div>
      </div><br/><br/>
      <div style={{alignItem: 'center', textAlign: 'center', marginLeft: 'auto'}}>
        <Suporte />
      </div>
    </div>
  )
};

export default Home;
