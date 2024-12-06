'use client'
import React from "react";
import { Header } from "@/components/header/Header";
import { GlobalStyle } from "./globalStyle";
import CourseType from "@/components/courseType/CourseType";
import AboutMe from "@/components/aboutMe/AboutMe";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Reviews from "@/components/reviewsStudents/Reviews";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import { register } from "swiper/element/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


register()

export default function Page() {

  

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      <GlobalStyle/>
      <Header />
      <AboutMe/>   
      <CourseType/>
      <Reviews/>
      <Faq/>
      <Footer/>  
    </>
  );
}
