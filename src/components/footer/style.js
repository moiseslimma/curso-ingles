import styled from "styled-components";

export const Footer = styled.footer`
    background-color: #140673;
    margin-top: 50px;
`

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;

    @media(max-width: 950px){
        max-width: 950px;
    }

    @media(max-width: 680px){
        max-width: 370px;
    }
`
export const Logo = styled.img`
    width: 220px;
    height: 120px;

    @media(max-width: 768px){
        width: 160px;
        height: 100px;
        margin-left: -30px;
    }
`

export const Icons = styled.img`
    width: 35px;
    height: 35px;
    margin-top: 15px;
    margin-right: 15px;
    cursor: pointer;

    @media(max-width: 900px){
        width: 30px;
        height: 30px;
        margin-top: 10px;
        margin-right: 10px;
    }


    @media(max-width: 680px){
        width: 25px;
        height: 25px;

    }
`
export const AllContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 35px;

    @media(max-width: 950px){
        gap: 5px;
    }


    @media(max-width: 680px){
        flex-direction: column;

    }
`
export const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 5px;
    width: 400px;
    margin-right: 20px;
    margin-left: 20px;

    @media(max-width: 790px){
        grid-template-columns: auto auto;
        margin-left: 10px;
        margin-right: 10px;
    }

    @media(max-width: 680px){
        margin-bottom: 10px;
        margin-left: 55px;
    }



    @media(max-width: 375px){
        margin: 0 auto;
        width: 320px;
        margin-bottom: 20px;
    }
`
export const Text = styled.a`
    color: #f1f1f1;
    text-decoration: none;
    width: 150px;
    margin-left: 10px;

    @media(max-width: 375px){
        font-size: 17px
    }
`

export const MediaContent = styled.div`
    text-align: center;


`
export const MediaTitle = styled.h3`
    color: #FFFFFF;
    font-size: 16px;
`