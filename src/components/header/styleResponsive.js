import styled from 'styled-components'

export const MobileMenu = styled.div `
    cursor: pointer;
    display: none;

    @media(max-width:1000px){
        display: inline-block;

    }

`

export const MobileLine = styled.div`
    width: 32px;
    height: 2px;
    background: #fff;
    margin: 8px;

`