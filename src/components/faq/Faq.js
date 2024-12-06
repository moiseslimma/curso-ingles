import React, { useState } from 'react'
import * as S from './style'
import { dataFaq } from './dataFaq'

const Faq = () => {

    return (
        <section>
            <S.Container id='faq'>
                <S.SectionTitle>Dúvidas frequentes</S.SectionTitle>
                <div>
                    {dataFaq.map(item=>(
                        <S.AllContent key={item.id}>
                            <details>
                                <S.Questions> {item.question}</S.Questions>
                                <S.Answers>{item.answer}</S.Answers>
                            </details>
                        </S.AllContent>
                    ))}
                </div>
            </S.Container>
        </section>
    )
}

export default Faq