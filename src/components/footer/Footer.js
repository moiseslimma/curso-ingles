import React from 'react'
import * as S from './style'
import {DataFooter} from './dataFooter'
import { MediaFooter } from './dataFooter'

const Footer = () => {
  return (
    <S.Footer>
        <S.Container>
            <S.AllContent>

                <S.Links>
                    {DataFooter.map(item => (
                        <S.Text href="#" key={item.item}>{item.item}</S.Text>                        
                    ))}
                </S.Links>
                <S.MediaContent>
                    <S.MediaTitle>Acompanhe as nossas redes</S.MediaTitle>
                    {MediaFooter.map(item => (
                        <S.Icons src={item.icon} key={item.id} alt={item.acess} />
                    ))}
                </S.MediaContent>
                <div>
                    &copy; Todos os direitos reservados
                </div>
            </S.AllContent>
        </S.Container>
    </S.Footer>
  )
}

export default Footer