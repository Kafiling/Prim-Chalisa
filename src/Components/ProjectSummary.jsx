import React from 'react'
import Card from './Card'
import {ProjectCard1} from './../Constants/Index'
const ProjectSummary = () => {
  return ( 
    <section id='project-sum' className={`flex md:flex-row flex-col py-[64px]  `}>
        <div className='w-[100%] flex flex-col justify-between items-center md:flex-row'>
        <Card {...ProjectCard1}/>
        <Card {...ProjectCard1}/>
        <Card {...ProjectCard1}/>
        </div>
    </section>
  )
}

export default ProjectSummary