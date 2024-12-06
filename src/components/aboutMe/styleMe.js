import styled from "styled-components";
import Image from 'next/image'

export const AllSection = styled.section`
    box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.9);
`;

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;

    @media(max-width: 768px) {
        max-width: 760px;
    }
`

export const AllContent = styled.div`
    padding-top: 100px;
    display: flex;
    justify-content: center;
    gap: 70px;

    @media(max-width: 768px){
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
`
export const TextContent = styled.div`
    padding: 10px;
    margin-top: 30px;
`

export const ContentTitle = styled.h3`
    font-family: "Poppins", sans-serif;
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 10px;
    letter-spacing: 1px;
`
export const JobFunction = styled.span`
    font-family: "Montserrat";
    font-size: 20px;
    letter-spacing: 1px;
    margin-bottom: 30px;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 50px;
        height: 3px;
        background-color: #000;
    }
`
export const WhoIs = styled.p`
    max-width: 550px;
    margin-top: 25px;
    font-size: 17px;
    text-align: justify;
    letter-spacing: 1px;

    &:nth-last-child(2){
        font-weight: bold;
        font-style: italic;
        margin-top: 35px;
        border: none;
    }
`

export const Photo = styled(Image)`
    border-radius: 10%;
    border: 2px solid #ccc;
    
    
    @media(max-width: 900px) {
        width: 335px;
        height: 470px;
    }
    @media(max-width: 768px) {
        width: 385px;
        height: 500px;
    }
    @media(max-width: 400px){
        width: 300px;
        height: 415px;
    }
`

export const SocialMedia = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 50px;
`

export const MediaIcon = styled(Image)`
    cursor: pointer;
`