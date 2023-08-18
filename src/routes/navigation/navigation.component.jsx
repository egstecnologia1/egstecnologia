import { Fragment,useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles.jsx';

import { HashLink as LinkHash } from 'react-router-hash-link';

//import {signOutUser} from '../../utils/firebase/firebase.utils';

import './../../assets/responsive.css';


const Navigation = () => {
  
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const menuClose = () => {
      console.log('clicked: ', document.getElementById("checkMenu"));
      document.getElementById("checkMenu").click();
      document.getElementById("menu-toggle").checked = false;
    }

    return (
      <div className="bg-gradient-to-r from-green-500 to-blue-500 flex flex-col lg:flex-row items-center justify-around lg:justify-center px-8" style={{height: '100px'}}>
        <section class="top-nav">
          <div>
            <Link  to='/'><img src="imagens/egs-tecnologia-editable.jpg" alt="EGS Tecnologia" width="65%" /></Link>
          </div>
          <input id="menu-toggle" type="checkbox" />
          <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button' id="checkMenu"></div>
        </label>
          <ul class="menu">
            <li onClick={menuClose}><NavLink to='/'>Home</NavLink></li>
            <li onClick={menuClose}><LinkHash to='/#about' style={{padding: '10px 15px', cursor: 'pointer'}}>Sobre</LinkHash></li>
            <li onClick={menuClose}><LinkHash to='/#solutions' style={{padding: '10px 15px', cursor: 'pointer'}}>Soluções</LinkHash></li>
            <li onClick={menuClose}><LinkHash to='/#clientes'>Clientes/parceiros</LinkHash></li>
            <li onClick={menuClose}><NavLink to='/shop'>Produtos</NavLink></li>
            <li onClick={menuClose}><LinkHash style={{marginRight: '5px'}} to='/#suporte'>Suporte</LinkHash></li>
            <li onClick={menuClose}><CartIcon/></li>
          </ul>
          {isCartOpen && <CartDropdown/>}
        </section>
        <Outlet/>
      </div>
  
    )
}

export default Navigation;