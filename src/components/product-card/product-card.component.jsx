import { useContext } from 'react';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import {ProductCardContainer, ProductImg, FooterContainer, ProductName, ProductPrice, ProductImgLg, ProductImgHe} from './product-card.styles.jsx';
const ProductCard = ({ product }) => {
    const {name, price, imageUrl } = product;

    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product)
    console.log(imageUrl);

    let margem;

    switch (name) {
        case 'Print Dual':
            margem = '50px';
            break;
        case 'Sat':
            margem = '60px';
            break;
        case 'Sat Wifi':
            margem = '60px';
            break;
        case 'Leitor DS':
            margem = '50px';
            break;
        default:
            break;
}

    return(<>
        <ProductCardContainer>
                <div>
            {imageUrl === 'd-sat-2-wifi.png' || imageUrl === 'd-sat-2.png' ? (
                <ProductImgLg src={`imagens/${imageUrl}`} alt={`${name}`} />
            ) : (
                <p><ProductImg src={`imagens/${imageUrl}`} alt={`${name}`} /></p>
            )}
            </div>
            <div className="productTooltip">
                {product.tooltip}
            </div>
            {/* <ProductImg src='d-sat-2-wifi.png' alt={`${name}`}/> */}
            
            <FooterContainer>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </FooterContainer>
        </ProductCardContainer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} style={{marginTop: margem}}>Adicionar</Button></>
    )
}

export default ProductCard;