"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginIcon from "/public/assets/user-solid.png";
import * as S from "./styles";
import { Announcement } from "./announcement/Announcement";
import logo from "/public/assets/logo-simple.png";
import * as M from "./styleResponsive";


export const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <S.Section>
        <S.Container>
          <S.Nav>  
            <S.Lista $menuOpen={menuOpen}>
              <S.ItemLi>
                <S.Ancora href="#about-me">Sobre mim</S.Ancora>
              </S.ItemLi>
              <S.ItemLi>
                <S.Ancora href="#cursos">Cursos</S.Ancora>
              </S.ItemLi>
              <S.ItemLi>
                <S.Ancora href="#feedback">Feedback</S.Ancora>
              </S.ItemLi>             
              <S.ItemLi>
                <S.Ancora href="#faq">Faq</S.Ancora>
              </S.ItemLi>             
              <S.ItemLi>
                <S.Ancora href="#">
                  <S.Icone
                    src={loginIcon}
                    alt="Login"
                    title="Faça seu Login"
                    width={28}
                    height={28}
                  />
                </S.Ancora>
              </S.ItemLi>
            </S.Lista>
          </S.Nav>
            <M.MobileMenu className="mbl-mn" onClick={toggleMenu}>
              <M.MobileLine className="line1"></M.MobileLine>
              <M.MobileLine className="line2"></M.MobileLine>
              <M.MobileLine className="line3"></M.MobileLine>
            </M.MobileMenu>
        </S.Container>
        <Announcement />
      </S.Section>
    </>
  );
};