import { useContext } from 'react';
import {Routes, Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.compoents';
import Category from '../category/category.component';
import  { ProductsContext } from '../../contexts/products.context';
import { ReactTooltip } from 'react-tooltip';

import ProductCard from '../../components/product-card/product-card.component';

// import PRODUCTS from '../../utils/json/data';

import './shop.styles.scss';
import Suporte from '../suporte/suporte.component';

//var Tooltip = require('rc-tooltip');

const Shop = () => {
    const { products } = useContext(ProductsContext);
    let data = [];
    return (
        <div>
        <div className='products-container'>
            {/* <Tooltip placement="left" trigger={['click']} overlay={<span>tooltip</span>}>
                Teste
            </Tooltip> */}
            {products.map((element) => {
                return (
                <span style={{marginTop: '150px'}}><div><ProductCard key={element.id} product={element} /></div></span>
                )
            })}
        </div>
        <Suporte />
        </div>
    )
}

export default Shop;