import React from 'react'
import Image from 'next/image'
import FirstType from './firstType/FirstType';
import SecondType from './secondType/SecondType';




const CourseType = () => {
    return (
      <section id='cursos'>
        <FirstType/>
        <SecondType/>
      </section>
    );
}

export default CourseType