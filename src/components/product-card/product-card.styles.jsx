import styled from 'styled-components';

export const ProductCardContainer = styled.div`

    width: 100%;
    display: flex;
    flex-direction: column;
    height: 350px;
    margin-top: -120px;
    align-items: center;
    position: relative;
    button {
        width: 80%;
        opacity: 0.7;
        position: absolute;
        top: 255px;
      }
`

export const ProductImg = styled.img`

    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 5px;
    
    &:hover {
        img {
            opacity: 0.8;
        }
    }
`

export const ProductImgLg = styled.img`

    width: 300px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 5px;
    
    &:hover {
        img {
            opacity: 0.8;
        }
    }
`

export const ProductImgHe = styled.img`

    width: 300px;
    height: 250px;
    object-fit: cover;
    margin-bottom: 5px;
    
    &:hover {
        img {
            opacity: 0.8;
        }
    }
`


export const FooterContainer = styled.div`

    vertical-align: baseline;
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    vertical-align: baseline;
`

export const ProductName = styled.span`

    width: 90%;
    margin-bottom: 15px;
`
export const ProductPrice = styled.span`

    width: 10%;
`