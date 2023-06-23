import * as React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import IonIcon from '@reacticons/ionicons';
import {BsFillMoonStarsFill, BsLinkedin, BsGithub} from 'react-icons/bs'
import img from "/public/man-developing-website-on-desk.svg"
import java from "/public/java.png"
import df from "/public/10126-icon-service-Data-Factories.svg"
import azs from "/public/00606-icon-service-Azure-Synapse-Analytics.svg"
import dj from "/public/django.svg"
import pan from "/public/Pandas_logo.svg"
import node from "/public/node-js (1).svg"
import ContactForm from './ContactFrom';








export default function Home() {
  
  return (
    <main className='bg-black px-10'>
      <div>
        <section className='min-h-screen'>
          
          <nav className='py-10 mb-24 flex justify-between'>
            <h1 className='text-xl font-burtons'>Manny</h1>
            <ul className='flex items-center'>
              <li><a href="https://www.linkedin.com/in/emmanuel-mpwanga-4387271bb" className=' hover:text-teal-600'><BsLinkedin className='cursor-pointer text-2xl ml-8'/></a></li>
              <li><a href="https://github.com/mannympwanga" className=' hover:text-teal-600'><BsGithub className='cursor-pointer text-2xl ml-4'/></a></li>
            </ul>
          </nav>
          <div className='text-center p-5'>
            <h2 className='text-5xl py-3 text-teal-600 font-medium'>Emmanuel Mpwanga</h2>
            <h3 className='text-3xl py-3'>Software Engineer</h3>
            <p className='text-md py-3  leading-8 text-gray-400'>
            I thrive on challenges and thrive when engaging with projects that push me beyond my comfort zone andknowledge boundaries.
            </p>
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-black w-80 h-40 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={img} alt={'programmer'}/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-10'>About Me</h3>
            <p  className='text-md py-3  leading-8 text-gray-400'>
            Continuously learning new languages and development techniques is not onlyimportant to me but also contributes to the success of any organization I work with. You can find some ofthe programs I have worked on throughout my time at Hyperiondev and beyond on my GitHub profileunder the name <a href="" className='text-bold hover:text-teal-600  text-red-600'> "mannympwanga" (Emmanuel Mpwanga)</a>.
            </p>
            <p  className='text-md py-3  leading-8 text-gray-400'>
            Among the programs I have developed, the most challenging one was the creation of Poised and TaskManager. These projects required me to apply my skills and problem-solving abilities to overcomecomplex obstacles. Despite the challenges, I am a fast learner, and within just three months during my boot camp at HyperionDev, I was able to acquire and master the skills necessary to develop these programs. I proudly achieved a remarkable overall score of 97%.
            </p>
            <p  className='text-md py-3  leading-8 text-gray-400'>
            As an aspiring Software Engineer, my passion lies in continuous growth and striving to become one of the best in my field. During my time at BlueMonday, I served as a junior programmer/data scientist. One of my notable contributions was the development of an HR system that facilitated the identification of the mostsuitable candidates for projects within the company, based on the company's specific skill set requirements.
            </p>
            <p  className='text-md py-3  leading-8 text-gray-400'>
            Additionally, I gained valuable experience working with Microsoft Azure. I utilized Azure Data Factory to construct data pipelines, enabling seamless data movement into a data lake or other cloud storage platforms. Moreover, I worked extensively with Azure Synapse, utilizing its capabilities to clean and visualize data, creating insightful reports and graphs.
            </p>
            <p  className='text-md py-3  leading-8 text-gray-400'>
            I am driven by the desire to excel as a Software Engineer, and I am eager to contribute my skills and knowledge to the growth and success of your organization.
            </p>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-10'>Skills</h3>
          </div>
          <div className='flex flex-col gap-5 py-10 md:flex-grow md:flex-wrap lg:flex-row lg:flex-wrap'>
            
            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 70%, #ddd 70%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                    <IonIcon name={'logo-python'} className='rounded-lg object-cover'/>
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>Python</p>
                <p className='text-xl mt-3 text-center'>Intermediate</p>
              </div>
            </div>

            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 78%, #ddd 78%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                    <IonIcon name={'logo-html5'} className='rounded-lg object-cover'/>
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>Html 5</p>
                <p className='text-xl mt-3 text-center'>Intermediate</p>
              </div>
            </div>

            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 78%, #ddd 78%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                    <IonIcon name={'logo-css3'} className='rounded-lg object-cover'/>
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>CSS 3</p>
                <p className='text-xl mt-3 text-center'>Intermediate</p>
              </div>
            </div>

            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 67%, #ddd 67%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                    <IonIcon name={'logo-javascript'} className='rounded-lg object-cover'/>
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>JavaScript</p>
                <p className='text-xl mt-3 text-center'>Intermediate</p>
              </div>
            </div>

            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 60%, #ddd 60%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                    <IonIcon name={'logo-react'} className='rounded-lg object-cover'/>
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>React.JS</p>
                <p className='text-xl mt-3 text-center'>Intermediate</p>
              </div>
            </div>


            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 67%, #ddd 67%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                    <IonIcon name={'logo-angular'} className='rounded-lg object-cover'/>
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>Angular</p>
                <p className='text-xl mt-3 text-center'>Intermediate</p>
              </div>
            </div>


            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 60%, #ddd 60%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                    <Image src={node} alt={'Node'} className='rounded-lg object-cover' width={100} height={100}/>
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>Node.JS</p>
                <p className='text-xl mt-3 text-center'>Intermediate</p>
              </div>
            </div>


            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 70%, #ddd 70%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                    <Image src={pan} alt={'pandas'} className='rounded-lg object-cover' width={100} height={100}/>
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>Panadas</p>
                <p className='text-xl mt-3 text-center'>Intermediate</p>
              </div>
            </div>

            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 70%, #ddd 70%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                  <Image src={dj} alt={'django'} className='rounded-lg object-cover' width={100} height={100}/>
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>Djangp</p>
                <p className='text-xl mt-3 text-center'>Intermediate</p>
              </div>
            </div>


            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 50%, #ddd 50%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                    <Image src={azs} alt={'azs'} className='rounded-lg object-cover' width={100} height={100}/>
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>Microsoft Azure Synapse</p>
                <p className='text-xl mt-3 text-center'>Beginner</p>
              </div>
            </div>

            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 50%, #ddd 50%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                  <Image src={df} alt={'DataFactory'} className='rounded-lg object-cover overflow-hidden' width={80} height={80}  />
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>Microsoft Data Factory</p>
                <p className='text-xl mt-3 text-center'>Beginner</p>
              </div>
            </div>

            <div  className='flex items-center justify-center mt-12 gap-10 flex-wrap basis-4/3 flex-1'>
              <div className='border-2 border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl'>
                <div 
                style={{
                  background:"conic-gradient(#0891AA 60%, #ddd 60%)",
                }} 
                className='w-32 h-32 flex items-center justify-center rounded-full'>
                  <div className='text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center'>
                    <Image src={java} alt={'Java'} className='rounded-lg object-cover' width={100} height={100}/>
                  </div>
                </div>
                <p className='text-xl mt-3 text-center'>Java</p>
                <p className='text-xl mt-3 text-center'>Intermediate</p>
              </div>
            </div>
          </div>
          
        </section>

        <section>
          <h3 className='text-3xl py-10'>Experience</h3>
          <div>
            <h2 className='text-5xl py-3 text-teal-600 font-medium'>
              BlueMonday
            </h2>
            <p className='text-md py-3 text-gray-500'>
              2022 Sep - 2023 March
            </p>
            <p className='text-md py-3 text-gray-500'>
              Junior Programmer
            </p>
            <p className='text-md py-3  leading-8 text-gray-400'>
              During my recent tenure as a Junior Programmer at BlueMonday, I hadthe opportunity to work on an HR system that effectively matched thebest candidates for projects based on the company's skill set. I alsoutilized my expertise in Microsoft Azure, specifically Azure Data Factoryand Azure Synapse, to build data pipelines, perform data cleaningtasks, and generate insightful reports. These experiences have honedmy ability to tackle complex problems, collaborate with cross-functional teams, and deliver solutions that meet both client andcompany objectives.
            </p>
          </div>
          <div>
            <h2 className='text-5xl py-3 text-teal-600 font-medium'>
              HyperionDev
            </h2>
            <p className='text-md py-3 text-gray-500'>
              2021 Sep - 2022 Sep
            </p>
            <p className='text-md py-3 text-gray-500'>
              Freelance Code Reviewer
            </p>
            <p className='text-md py-3  leading-8 text-gray-400'>
              My time as a Freelance Code Reviewer at HyperionDev allowed me toenhance my communication skills and deepen my understanding ofprogramming concepts. Engaging with students of different levels andproviding comprehensive feedback on their code submissions hasequipped me with the ability to effectively communicate technicalinformation and guide individuals towards achieving their goals.
            </p>
          </div>
        </section>

        <section>
          <h3 className='text-3xl py-10'>
            Education
          </h3>
          <div>
            <h2 className='text-5xl py-3 text-teal-600 font-medium'>
              HyperionDev
            </h2>
            <p className='text-md py-3 text-gray-500'>
              2021
            </p>
            <p className='text-md py-3 text-gray-500'>
              Software EngineerBootcamp Certificate
            </p>
            <p className='text-md py-3  leading-8 text-red-600'>
              <a href="https://www.hyperiondev.com/portfolio/65235/" className='text-bold hover:text-teal-600'>HyperionDev Profile</a>
            </p>
          </div>

          <div>
            <h2 className='text-5xl py-3 text-teal-600 font-medium'>
              EURAKE HIGH SCHOOL
            </h2>
            <p className='text-md py-3 text-gray-500'>
              2020
            </p>
            <p className='text-md py-3 text-gray-500'>
              Matric Certificate
            </p>
          </div>
        </section>

        <section className=' pt-20 flex justify-center w-50'>
          <div className='border-2 border-cyan-600 relative bg-gray-900 p-10 pt-10 rounded-xl w-50'>

            <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-teal-400'>Let</span> Connect</h1>
            <ContactForm />
          </div>
        </section>

        

        
      </div>
    </main>
  )
}

