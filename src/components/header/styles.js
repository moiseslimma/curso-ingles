import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
  background-image: url(/assets/aula-dark-photoaidcom-darken.jpg);
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

    @media(max-width: 1050px){
        background-position: 70% 50%;
    }
    @media(max-width: 750px){
        background-position: 40% 20%;
    }
    @media(max-width: 450px){
        background-position: 35% 15%;
    }


`;

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;

    @media(max-width: 768px) {
        max-width: 760px;
    }
`

export const Nav = styled.nav`
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

`

export const Lista = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    letter-spacing: 2px;
    font-size: 21px;

    @media (min-width: 1001px) {
    position: static; 
    width: auto; 
    height: auto; 
    transform: none; 
    background-color: transparent; 
    gap: 30px; 
  }

    @media(max-width:1000px){
        position: absolute;
        top: 8vh;
        left: ${(props) => (props.$menuOpen ? "0" : "-100%")};
        width: 45vw;
        height: 32vh;
        background-color: #23232e;
        flex-direction: column;
        align-items: center;
        z-index: 10;
        gap: 20px;
        transform: translateX(-100%);
        transition: transform 0.3s ease-in-out;
        border-radius: 30px;
        transform: translateX(${(props) => (props.$menuOpen ? "0" : "-100%")})
    }
`;


export const ItemLi = styled.li`
    margin-right: 30px;

    @media(max-width: 375px){
        margin-bottom: 15px;
    }
`;

export const Ancora = styled.a`
    font-family: "Roboto";
    text-decoration: none;
    padding: 10px;
    color: #FFFFFF;
    font-weight: bold;

    &:hover {
        border-bottom: 2px solid #055bca;
    }
`;

export const Icone = styled(Image)`
    width: 30px;
    height: 30px;

`