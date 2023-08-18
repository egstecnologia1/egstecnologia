import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles'

const CartDropdown = () => {

    const {cartItems, isCartOpen, setIsCartOpen} = useContext(CartContext);

    const navigate = useNavigate();

    console.log(cartItems);

    let quantity = 0;
    for(var i = 0; i <= cartItems.length; i++) {
        if(cartItems[i]) {
            quantity += cartItems[i].quantity;
            console.log(cartItems[i]);
        }
    }
    console.log('quantity: ', quantity);
    const goToCheckoutHandler = () => {
        setIsCartOpen(!isCartOpen)
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {quantity ? (
                    cartItems.map((item) => (<CartItem key={item.id} cartItem={item}/>))
                ): (
                    <EmptyMessage>Your cart is empty</EmptyMessage> 
                )}
            </CartItems>
            {quantity ? (
                <Button onClick={goToCheckoutHandler}>Fazer Pedido</Button>
            ) : (
                <p></p>
            )}
        </CartDropdownContainer>
    )
}

export default CartDropdown;