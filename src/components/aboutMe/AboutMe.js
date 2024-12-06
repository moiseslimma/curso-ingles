import React from 'react'
import Image from 'next/image'
import teacher from '/public/assets/pexels-yankrukov-8197557a.jpg'
import * as S from './styleMe'
import instagramIcon from '/public/assets/iconinstagram.png'
import linkedinIcon from '/public/assets/iconlinkedin.png'
import "aos/dist/aos.css";

const AboutMe = () => {
  return (
    <S.AllSection>
        <S.Container id='about-me'>
            <S.AllContent data-aos="fade-up-right">
                <div>
                    <S.Photo src={teacher} alt="professor de inglês" width={500} height={700} />
                </div>
                <S.TextContent >
                    <S.ContentTitle>Richard Nascimento</S.ContentTitle>
                    <S.JobFunction>Professor de Inglês</S.JobFunction>
                    <S.WhoIs>
                    Richard Nascimento é um dedicado professor de inglês com mais de 10 anos de experiência. Sua paixão pela língua inglesa o leva a sempre buscar novas abordagens e metodologias para engajar seus alunos, proporcionando uma experiência de aprendizado dinâmica e eficaz. Ele acredita que a prática constante e o uso real do idioma são essenciais para dominar a língua e atingir a fluência.
                    </S.WhoIs>
                    <S.WhoIs>&quot;Educação não transforma o mundo. Educação muda as pessoas. Pessoas transformam o mundo.;</S.WhoIs>
                    <S.SocialMedia>
                        <S.MediaIcon src={instagramIcon} alt="instagram" width={30} height={30} />
                        <S.MediaIcon src={linkedinIcon} alt="linkedin" width={30} height={30}/>
                    </S.SocialMedia>
                </S.TextContent>
            </S.AllContent>
        </S.Container>
    </S.AllSection>
  );
}

export default AboutMe