import styled from "styled-components";

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
    padding-top: 100px;
    margin-bottom: 100px;

    @media(max-width: 375px){
        font-size: 25px;
    }
`

export const AllContent = styled.div`
    margin-left: 50px;
    border-bottom: 1px solid #000;
    padding: 20px;
`



export const Questions = styled.summary`
    font-size: 20px;
    font-weight: 700;
    color: #6cbad9;
    cursor: pointer;
    list-style: none;

    &::before {
        content: "+ ";
        margin-left: -10px;
        margin-right: 10px;
    }

    details[open] &::before {
        content: "- ";
    }
`;

export const Answers = styled.p`
    margin-top: 10px;
    color: #7A7A8F;
    font-size: 17px;
    text-align: justify;
`;
