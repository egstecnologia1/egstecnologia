import { Fragment } from "react";

const CarBrandsSlide = ({ dataArray }) => {
  console.log(dataArray);
  return (
    <Fragment>
      {dataArray.map((res) => (
        <>
          <div key={res.id} style={{display: 'flex', marginLeft: '-300px' }}>
            {/* <table style={{backgroundColor: '#e8f5e9', color: 'black', border: '1px solid black'}}>
              <tbody>
                <tr><td align='left' style={{verticalAlign: 'top'}}><br/><br/><h1 style={{fontSize: '28px', wordSpacing: '5px', lineHeight: '42pt', width: '420px'}}>O sistema de PDV<br/>preferido dos varejistas</h1><br/>
                <p style={{fontSize: '12px', fontWeight: 'initial'}}>SysPDV é o sistema de vendas e gestão<br/> para quem deseja reduzir o esforço operacional,<br/>controlar vendas e começar a emitir cupom fiscal.</p></td></tr>
              </tbody>
            </table> */}
            <div style={{ marginLeft: '-50px', whiteSpace:'nowrap'}}><h1>O sistema de PDV preferido dos varejistas</h1>
            <p style={{fontSize: '12px'}}>SysPDV é o sistema de vendas e gestão<br/> para quem deseja reduzir o esforço operacional,<br/>controlar vendas e começar a emitir cupom fiscal.</p>
            </div>
            <img src="imagens\produto.jpg" alt="Foto" title="Foto" style={{backgroundColor: '#e8f5e9', height: '400px', verticalAlign: 'top'}}/>
          </div>
        </>
      ))}
    </Fragment>
  );
};

export default CarBrandsSlide;
