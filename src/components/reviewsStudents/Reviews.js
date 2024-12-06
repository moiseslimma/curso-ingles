import React from 'react'
import {DataReview} from './dataReview'
import * as S from './styleReview'
import "aos/dist/aos.css";

const Reviews = () => {

  return (
    <section>
      <S.Container id='feedback'>
        <S.SectionTitle>Feedback de nossos alunos</S.SectionTitle>
        <S.AllContent data-aos="fade-up-right">
          {DataReview &&
            DataReview.map((item) => (
              <S.Item key={item.id}>
                <S.Photos
                  src={item.photo}
                  alt="aluna"
                  width={267}
                  height={174}
                />
                <S.StudentName>{item.name}</S.StudentName>
                <S.Feedback>
                  {item.text} <br />
                  <S.Links href={item.link}>Veja o feedback completo</S.Links>
                </S.Feedback>
              </S.Item>
            ))}
        </S.AllContent>
        <S.DivForButton data-aos="zoom-in-up">
          <S.Button>Junte-se à comunidade</S.Button>
        </S.DivForButton>
      </S.Container>
    </section>
  );
}

export default Reviews