import React from 'react'
import Card from './Card'
import {ProjectCard1} from './../Constants/Index'
import { InView } from "react-intersection-observer";
const ProjectSummary = () => {
  return ( 
    <InView>
    {({ inView, ref, entry }) => ( 
    <section ref={ref} id='project-sum' className={`flex md:flex-row flex-col py-[64px]  ` + (inView ? "animate-fade-up animate-ease-in-out animate-delay-300 " : "")}>
        <div className='w-[100%] flex flex-col justify-between items-center md:flex-row'>
        <Card {...ProjectCard1}/>
        <Card {...ProjectCard1}/>
        <Card {...ProjectCard1}/>
        </div>
    </section>
     )}
     </InView>
  )
}

export default ProjectSummary