import React from 'react'
import arr from '../images/arrow.webp'
import img from '../images/side.webp'
import SecondLastcompo from './SecondLastcompo'
import Quarterfrfv from './Quarterfrfv'
import Quartersxtsth from './Quartersxtsth'
import Quarterss from './Quarterss'
const Web = () => {
  return (
    <>
       <div className='h-[90vh] w-full bg-gray-200'>
       <h1 className='pt-[4cm] text-5xl font-bold ml-[16cm] border-b-[10px] w-[5cm] border-blue-600'>Web 3.0</h1>
       <img src={img}/>
       <img src={arr} className='w-[5.2cm] mt-[-1cm]'/>
       <p className='text-center mt-[-7cm] text-[16px]'>Certified Web 3.0 and Metaverse Developer. A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the <br/>Internet.</p>
       <p className='text-center mt-5 text-[18px] leading-8'>This curriculum is intended for beginners who want to learn software development from the ground up. The first two quarters are shared by <br/>
          all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to<br/>
          be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. <br/>
          The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held <br/>
          primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes <br/>
          complemented by online Zoom laboratories and recorded videos.</p>
       </div>
       <div className='h-[110vh] w-full bg-white'>
        <h1 className='text-5xl font-bold text-center pt-[1.5cm] border-b-[10px] w-[11.6cm] ml-[12.5cm] border-blue-600'>Program Structure</h1>
         <p className='text-[17px] text-center mt-6'>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet Consolidating Web<br/>
          3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
         <h1 className='text-3xl font-bold ml-7 mt-9'>Core Courses (Common in All Specializations)</h1>
         <p className='ml-7 mt-5 font-medium'>Every participant of the program will start by completing the following three core courses:</p>
          <div className='flex justify-center space-x-[1cm] mt-[1.2cm]'>
            <SecondLastcompo h1="Quarter 1" p="CS-101 Object Oriented Pragramming Using Typescript"/>
            <SecondLastcompo h1="Quarter 2" p="W2-102 Developing planet-Scale Web-2.0 Serverless Cloud Clouds Apps and APIs Using Next js 13 and Cloud development Kit(CDK) For Terraform"/>
            <SecondLastcompo h1="Quarter 3" p="$-101 Dollar Making Bootcamp Full-Stack Tempelate and API Product Development"/>
          </div>
       </div>
       <div className='h-[77vh] w-full bg-white'>
         <h1 className='text-3xl font-bold ml-[1.5cm]'>Specialized Tracks</h1>
         <p className='text-[18px] ml-[1.5cm] mt-5'>After completing the first two quarters the participants will select one or more specializations consisting of two courses each:</p>
         <h1 className='text-center text-3xl font-bold mt-[1.3cm]'>Web 3.0 (Blockchain) and Metaverse Specialization</h1>
         <p className='text-center mt-6'>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation<br/>
          of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</p>
          <div className='flex justify-center space-x-[1.5cm]'>
            <Quarterfrfv h1="Quarter 4" p="W3-351 Developing Smart Contracts And Planet-Scale Web 3.0 Dapps"/>
            <Quarterfrfv h1="Quarter 5" p="MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences"/>
          </div>
       </div>
       <div className='h-[57vh] w-full bg-white'>
       <h1 className='text-center text-3xl font-bold mt-[1.3cm]'>Artificial Intelligence (AI) and Deep Learning Specialization</h1>
         <p className='text-center mt-6'>The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.</p>
         <div className='flex justify-center space-x-[1.5cm]'>
            <Quartersxtsth h1="Quarter 4" p="AI-351: Developing Planet-Scale Intelligent APIs and Python Programming"/>
            <Quartersxtsth h1="Quarter 5" p="AI-361: Deep Learning And MLOps"/>
          </div>
       </div>

       <div className='h-[57vh] w-full bg-white'>
       <h1 className='text-center text-3xl font-bold mt-[1.3cm]'>Cloud-Native Computing Specialization</h1>
         <p className='text-center mt-6'>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes</p>
         <div className='flex justify-center space-x-[1.5cm]'>
            <Quarterss h1="Quarter 4" p="CN-351: Certified Kubernetes Application Developer (CKAD)"/>
            <Quarterss h1="Quarter 5" p="CN-361: Developing Multi-Cloud APIs using CDK for Terraform"/>
          </div>
       </div>
    </>
  )
}

export default Web