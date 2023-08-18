import React from 'react';
import './style.css';
  
const About = () => {
  return (
    <>
    <h1>Sobre Nós</h1>
    <div
      style={{
        display: 'flex'
      }}
    >
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right'
      }}
    >
      <table id="missao">
        <tr><th><span style={{color: 'blue', fontWeight: 'bold' }}>Missão</span></th></tr>
        <tr><td style={{verticalAlign: 'top'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?          
        </td></tr>
      </table>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right'
      }}
    ></div>
      <table id="visao">
        <tr><th><span style={{color: 'blue', fontWeight: 'bold' }}>Visão</span></th></tr>
        <tr><td style={{verticalAlign: 'top'}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?       
        </td></tr>
      </table>
    </div>
    <br / ><br / >
    <div style={{textAlign: 'center', color: 'blue', fontWeight: 'bold' }}>Conheça os valores da Eclética</div>
    <div style={{textAlign: 'center', color: 'blue', fontWeight: 'bold' }}>O que levamos em tudo o que fazemos</div>
    <br / ><br / >
    <table>
      <tr><th><img src="imagens/empresa-01.jpg" alt="Confiabilidade" width="95%" /><br/><span style={{color: 'blue', fontWeight: 'bold' }}>Confiabilidade</span></th><th><img src="imagens/empresa-02.jpg" alt="Parceria" width="95%" /><br/><span style={{color: 'blue', fontWeight: 'bold' }}>Parceria</span></th><th><img src="imagens/empresa-03.jpg" width="95%" alt="Eficiência" /><br/><span style={{color: 'blue', fontWeight: 'bold' }}>Eficiência</span></th></tr>
      <tr><td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?</td>
      <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?</td>
      <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint minima dicta sequi, at consectetur magnam est minus veritatis ratione mollitia. Cum magnam ipsam, reprehenderit explicabo sunt animi modi excepturi sequi?</td></tr>
    </table>
    </>
  );
};
  
export default About;