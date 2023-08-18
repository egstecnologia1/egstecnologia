import styled from 'styled-components';

export const CheckoutContainer = styled.div`

    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
`

export const CheckoutHeader = styled.div`

    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const HeaderBlock = styled.div`

    text-transform: capitalize;
    width: 23%;

    &:last-child {
    width: 8%;
    }
`

export const Total = styled.span`

    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
`

export const Tabela = styled.table`
    width: 100%;
    padding: 10px 0;
    border-spacing: 5px;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`

export const TabelaAlternada = styled.table`
    width: 100%;
    margin-top: 10px;
    border-spacing: 5px;
    border: 1px solid black;
    tr:nth-child(even) {
        background:lightgray;
    }
`