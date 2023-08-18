import { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component';
import {CategoryContainer, CategoryTitle} from './category.styles.jsx';

import { CategoriesContext } from '../../contexts/categories.context';

const Category = () => {
    
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {

        setProducts(categoriesMap[category])

    }, [category, categoriesMap]);

    return(
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                
                {
                    products && products.map((product, index) => <ProductCard key={product.id} product={product}/>)
                }
            </CategoryContainer>
        </>
    )

}

export default Category;