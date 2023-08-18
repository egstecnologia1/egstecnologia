import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total, Tabela, TabelaAlternada} from './checkout.styles.jsx';
import Input from '../../components/input/input.jsx';
import Modal from './modal.jsx';

import './checkout.styles.scss';

const Checkout = () => {

    const {cartItems} = useContext(CartContext);
    const [cnpjvalido, setCnpjInvalido] = useState(false);
    let total = 0;
    const [openModal, setOpenModal] = useState(false);
    const sendToWhatsApp = () => {
        setOpenModal(true);
        console.log(document.getElementById('numwhatsapp'))
        alert(document.getElementById('numwhatsapp').value);
        window.open(`https://wa.me/${document.getElementById('numwhatsapp').value}`, '_blank');
    }

    const enviar = () => {
        
        var razao = document.getElementById("razao").value;
        var contato = document.getElementById("contato").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var cnpj = document.getElementById("cnpj").value;

        if(razao===''){
            alert('Campo Razão Social é obrigatório!');
            return;
        }
        if(contato===''){
            alert('Campo Contato é obrigatório!');
            return;
        }
        if(phone===''){
            alert('Campo Telefone é obrigatório!');
            return;
        }
        if(email===''){
            alert('Campo Email é obrigatório!');
            return;
        }
        if(cnpj===''){
            alert('Campo CNPJ é obrigatório!');
            return;
        }

        var url = "https://wa.me/5511985105047?text="
            + "Razão Social: " + razao + "%0a"
            + "CNPJ: " + cnpj + "%0a"
            + "Contato: " + contato + "%0a"
            + "Phone: " + phone + "%0a"
            + "Email: " + email + "%0a"
            + "Itens: %0a" + itens + "%0a"
            + "Total: " + total;

        window.open(url, '_blank').focus();
        setOpenModal(false);
        //window.open('https://wa.me/5511985105047?text=Tenho%20interesse%20em%20comprar%20seu%20carro', '_blank');
    }

    const sair = () => {
        setOpenModal(false);
    }

    const handleBlurCpfCnpj = async (e) => {
        const clearDocument = e.target.value.replace(/(\.||\/)/g,'');
        //let documentoInvalido = false;
        let cnpjInvalido = false;
        setCnpjInvalido(true);
        console.log(cnpjvalido);
        if (clearDocument){
            cnpjInvalido = !validarCNPJ(clearDocument);
            setCnpjInvalido(cnpjInvalido);
        }
        //console.log(`CNPJ inválido: `, cnpjInvalido);
        // setValidaDadosCotacao({...validaDadosCotacao, documentoInvalido, cnpjInvalido});
        // salvarAutomatico();
    }

    function validarCNPJ(cnpj) {
        cnpj = cnpj.replace(/[^\d]+/g,'');
        if(cnpj == '') return false;
        if (cnpj.length != 14)
            return false;
        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;
        // Valida DVs
        let tamanho = cnpj.length - 2
        let numeros = cnpj.substring(0,tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        tamanho = tamanho + 1;
        numeros = cnpj.substring(0,tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
          soma += numeros.charAt(tamanho - i) * pos--;
          if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
              return false;
        return true;
    }

    cartItems.map((item) => {
        total += item.price * item.quantity;
        return total;
    })

    var itens = cartItems.map(item => {
        return " Nome do produto: " + item.name + " - Quantidade: " + item.quantity + ' - Preço: ' + (item.price*item.quantity)+ "%0a";
    }).join('');

    return (
        <CheckoutContainer className="checkout-container">
            <CheckoutHeader className="checkout-header">
                <HeaderBlock>
                    <span>Produto</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Descrição</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantidade</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Preço</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remover</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
            {/* <a style={{paddingTop: '10px'}} href="#" onClick={sendToWhatsApp}>Solicitar pedido</a> */}
            {cartItems.length > 0 ? (
                <button onClick={sendToWhatsApp} style={{backgroundColor: '#e8f5e9', borderRadius: '100px', marginTop: '10px', padding: '5px'}}>Solicitar pedido</button>
            ) : (
                <p></p>
            ) }
            <Total>Total: ${cartItems.length == 0 ? 0 : total }</Total>
            <Modal size="lg" isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                <Tabela>
                    <tr><td style={{textAlign: 'right'}}>Razão Social:&nbsp;</td><td><Input id="razao" inputType="text" /><font color="red" size="5" style={{fontWeight: 'bold'}}>*</font></td></tr>
                    <tr><td style={{textAlign: 'right'}}>CNPJ:&nbsp;</td><td><Input id="cnpj" onBlur={handleBlurCpfCnpj} inputType="text" mask="99.999.999/9999-99" /><font color="red" size="5" style={{fontWeight: 'bold'}}>*</font><font color="red" size="2" style={{fontWeight: 'bold'}}>{cnpjvalido ? 'CNPJ inválido' : ''}</font></td></tr>
                    <tr><td style={{textAlign: 'right'}}>Contato:&nbsp;</td><td><Input id="contato" inputType="text" /><font color="red" size="5" style={{fontWeight: 'bold'}}>*</font></td></tr>
                    <tr><td style={{textAlign: 'right'}}>Telefone:&nbsp;</td><td><Input id="phone" inputType="text" mask="(99) 99999-9999" /><font color="red" size="5" style={{fontWeight: 'bold'}}>*</font></td></tr>
                    <tr><td style={{textAlign: 'right'}}>Email:&nbsp;</td><td><Input id="email" inputType="email" /><font color="red" size="5" style={{fontWeight: 'bold'}}>*</font></td></tr>
                    <tr><td style={{textAlign: 'right'}}>Itens:&nbsp;</td>
                    <td><TabelaAlternada>
                        <tr><th style={{fontWeight: 'bold', fontSize: '13px', padding: '5px'}}>Nome</th><th style={{fontWeight: 'bold', fontSize: '13px', padding: '5px'}}>Qtd</th><th style={{fontWeight: 'bold', fontSize: '13px', padding: '5px'}}>Preço</th></tr>
                        {cartItems.map(i => {
                            return <tr key={i}  style={{textAlign: 'center'}}><td>{i.name}</td><td style={{textAlign: 'center'}}>{i.quantity}</td><td  style={{textAlign: 'center'}}>{i.quantity * i.price}</td></tr>
                        })}
                    </TabelaAlternada></td></tr>
                    <tr><td colSpan={2} align='center'><button onClick={enviar} style={{backgroundColor: '#e8f5e9', borderRadius: '100px', marginTop: '10px', margin: '20px', padding: '5px'}} disabled={cnpjvalido}>Enviar</button>&nbsp;<button onClick={sair} style={{backgroundColor: '#e8f5e9', borderRadius: '100px', marginTop: '10px', padding: '5px'}}>Sair</button></td></tr>
                </Tabela>

            </Modal>
        </CheckoutContainer>
    )
}

export default Checkout