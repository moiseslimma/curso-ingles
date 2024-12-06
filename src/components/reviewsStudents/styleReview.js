import styled from 'styled-components'
import Image from 'next/image'



export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;

    @media(max-width: 768px){
        max-width: 760px;
    }

    @media(max-width: 375px){
        max-width: 370px;
    }
`

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-size: 35px;
    color: #090d4d;
    text-align: center;
    padding-top: 100px;
    margin-bottom: 100px;

    @media(max-width: 375px){
        font-size: 25px;
    }
`

export const AllContent = styled.div`
    display: flex;
    justify-content: center;

    @media(max-width: 1020px) {
        display: grid;
        grid-template-columns: auto auto;
    }

    @media(max-width: 580px){
        grid-template-columns: auto;
    }
`
export const Item = styled.div`
    text-align: center;
    width: 290px;

    @media(max-width: 768px){
        padding: 10px;
    }

    @media(max-width: 375px){
        padding: 30px;
    }
`
export const Photos = styled.img`
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0, .5);

    @media(max-width: 1150px){
        width: 90%;
    }

    @media(max-width: 1020px){
        margin-top: 50px;
    }
`

export const StudentName = styled.h3`
    color: #0055ff;
    padding: 15px;
    font-size: 30px;
    font-weight: 600;

    @media(max-width: 1150px){
        font-size: 25px;
    }
`;

export const Feedback = styled.p`
    max-width: 290px;
    font-size: 20px;
    font-weight: 400;

    @media(max-width: 1150px){
        font-size: 19px;
    }
`;

export const Links = styled.a`
    color: #bf3467;
`;

export const Button = styled.button`
    width: 190px;
    height: 50px;
    background-color: #ff345c;
    border: none;
    border-radius: 15px;
    color: #FFF;
    font-size: 16px;
    text-shadow: 0 0 10px rgba(0,0,0, .3);

    &&:hover {
        background-color: green;
    }
`;

export const DivForButton = styled.div`
    margin-top: 90px;
    text-align: center;
`