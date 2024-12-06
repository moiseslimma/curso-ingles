import React from "react";
import * as S from "./secondStyle";
import Image from "next/image";
import classroom from "/public/assets/pexels-katerina-holmes.jpg";
import "aos/dist/aos.css";

const SecondType = () => {
    return (
        <section>
            <S.CourseTypeContent>
                <div>
                    <S.Photos
                        src={classroom}
                        alt="aluna estudando em casa"
                        width={510}
                        height={340}
                    />
                </div>
                <S.SideTextContent data-aos="fade-left">
                    <S.TextContentTitle>PARTICULAR</S.TextContentTitle>
                    <S.TextContent>
                        Nossas aulas são realizadas com uma frequência de 2 horas semanais. Para garantir um ambiente de aprendizado mais personalizado e interativo, mantemos um número máximo de 2 alunos por turma. Isso permite uma atenção mais direcionada às necessidades individuais de cada aluno.
                        <details>
                        <S.ClickHere>Leia mais</S.ClickHere>
                        Além disso, caso haja apenas 1 aluno interessado em iniciar a turma, garantimos o início imediato das aulas, adaptando-nos às necessidades individuais.                           
                        Durante o curso, fornecemos aos alunos um material didático específico, composto por um módulo de conversação e um livro. O módulo de conversação é projetado para enfatizar a prática da fala e desenvolver habilidades de comunicação oral. O livro complementar fornece suporte adicional, abordando aspectos gramaticais, vocabulário e outras habilidades linguísticas relevantes.
                        A combinação do módulo de conversação e do livro garante um aprendizado abrangente e equilibrado, permitindo que os alunos desenvolvam suas habilidades de conversação enquanto aprimoram sua compreensão gramatical e vocabulário.</details>
                         
                    </S.TextContent>
                </S.SideTextContent>
            </S.CourseTypeContent>
        </section>
    );
};

export default SecondType;
