import styled from "styled-components";
import Image from "next/image";

export const SectionTitle = styled.h3`
  font-size: 35px;
  color: #090d4d;
  text-align: center;
  margin-top: 100px;
`;

export const CourseTypeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 50px;
  background: linear-gradient(to right, #ff7171, #f1f1f1, #ffffff);
  box-shadow: inset 0 0 50px rgba(255, 255, 255, 0.9);
  margin-top: 20px;

  @media (max-width: 930px) {
    flex-direction: column;
  }
`;

export const SideTextContent = styled.div`
  width: 550px;
  height: auto;

  @media(max-width: 580px){
    width: 400px;
  }
  @media(max-width: 440px){
    width: 330px;
  }
`;

export const TextContentTitle = styled.h3`
  text-align: center;
  font-size: 25px;
  margin-bottom: 15px;
`;

export const TextContent = styled.div`
  font-size: 20px;
  text-align: justify;
`;

export const Photos = styled(Image)`
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
  max-width: 100%;
  height: auto;

  @media(max-width: 580px){
    display: block;
    margin: 0 auto;
    width: 80%;
    height: 80%;
  }
`;

export const ClickHere = styled.summary`
  margin: 10px 0;
  color: #090d4d;
`;