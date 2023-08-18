import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles';

const CartIcon = () => {

    const {cartItems, isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    let quantity = 0;
    for(var i = 0; i <= cartItems.length; i++) {
        if(cartItems[i]) {
            quantity += cartItems[i].quantity;
            console.log(cartItems[i]);
        }
    }

    return (
        <CartIconContainer onClick={toogleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            {quantity > 0 ? (
                <ItemCount>{quantity}</ItemCount>
            ):(
                <ItemCount>0</ItemCount>
            )}
        </CartIconContainer>
    )
}

export default CartIcon;