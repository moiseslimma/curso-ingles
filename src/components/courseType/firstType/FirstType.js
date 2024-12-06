import React from "react";
import * as S from "./firstStyle";
import Image from "next/image";
import aloneGirl from "/public/assets/photo-study.jpg";
import "aos/dist/aos.css";


const FirstType = () => {
  return (
    <section>
      <S.SectionTitle>Escolha o curso ideal para você:</S.SectionTitle>
      <S.CourseTypeContent>
        <S.SideTextContent data-aos="fade-right">
          <S.TextContentTitle>ON DEMAND</S.TextContentTitle>
          <S.TextContent>
            Oferecemos aulas sob demanda, o que significa que as aulas são
            programadas de acordo com a necessidade de cada aluno. Isso permite
            que você inicie as aulas imediatamente, assim que manifestar seu
            interesse. Adaptamos nosso cronograma para atender às suas
            preferências e disponibilidade. Durante o curso, fornecemos aos
            alunos um material específico, composto por um módulo de conversação
            e um livro.
            <details>
              <S.ClickHere>Leia mais</S.ClickHere>
              O módulo de conversação é
              projetado para enfatizar a prática da fala e desenvolver
              habilidades de comunicação oral. O livro complementar fornece
              suporte adicional, abordando aspectos gramaticais, vocabulário e
              outras habilidades linguísticas relevantes. A combinação do módulo
              de conversação e do livro garante um aprendizado abrangente e
              equilibrado, permitindo que os alunos desenvolvam suas habilidades
              de conversação enquanto aprimoram sua compreensão gramatical e
              vocabulário.
            </details>
          </S.TextContent>
        </S.SideTextContent>
        <div>
          <S.Photos
            src={aloneGirl}
            alt="aluna estudando em casa"
            width={510}
            height={340}
          />
        </div>
      </S.CourseTypeContent>
    </section>
  );
};

export default FirstType;
