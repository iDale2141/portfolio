'use client'
import Image from 'next/image'

import { FaLaptop, FaCode } from 'react-icons/fa'
import { GiPoliceBadge } from "react-icons/gi"; // Police badge
import { FaUserShield } from "react-icons/fa"; // Police/guard style

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ReactNode } from "react";

import 'swiper/css'
import 'swiper/css/navigation'

export default function Skills() {

	interface Experience {
	  year: string;
	  title: string;
	  description: string;
	  image: string;
	  imgWidth?: string | number;
	  icon?: ReactNode;
	}

	const experiences: Experience[] = [
    {
      year: '2015-2016',
      title: 'Junior Developer',
      description: `This is not considered as a real job but I want to include this. I had my internship in a local IT company for 6 months. This is solely a web development company, but they had a client that wanted to create an Android game promoting a presidential candidate for 2016. I had no choice but to accept the task and studied "Eqela," a cross-platform development tool for building apps from a single codebase. It was a 3-man team — 2 game developers and 1 graphic designer. It was new for me, but it was a very good experience. The game was published on social media and in newspapers, which made us feel a little proud.`,
      image: '/eqela.webp',
      imgWidth: '120px',
      icon: <FaLaptop className="w-6 h-6" />
    },
    {
      year: '2016-2020',
      title: 'Junior to Senior Developer',
      description: `This is where the real journey began. After I graduated, the company where I had my internship offered me a job. I started as a Junior Web Developer with a salary of $150/month (this is the reality in my country). I worked there until I was promoted to Senior Web Developer, earning $250/month. During my time there, I developed several web applications, including a Cashiering System, School Management System, Human Resource Management System, Clinic Information System, and more. Projects were built using <b>CodeIgniter/Laravel, Bootstrap/jQuery, and MySQL</b>, depending on who my Team Leader was.`,
      image: '/EngtechLogos.png',
      imgWidth: '350px',
      icon: <FaLaptop className="w-6 h-6" />
    },
    {
      year: '2020-2025',
      title: 'Police Officer',
      description: `This was a turning point in my life. When my girlfriend became pregnant, I knew my salary couldn’t sustain a family. Despite having no military background, I applied—and was accepted. For two years, I served in the administrative office as both IT specialist and secretary under a high-ranking officer, <b>gathering critical data, preparing official documents, and producing reports</b> for higher command. The role demanded precision, confidentiality, and strict adherence to deadlines—skills I still carry today.`,
      image: '/pnp.png',
      imgWidth: '350px',
      icon: <GiPoliceBadge className="w-6 h-6 text-white" />
    },
    {
      year: '2023-2025',
      title: 'Front-end Developer',
      description: `This is the current stage of my life. I left the service to return to my true passion—the IT world. With the help of a former colleague from my first job, I was hired as a part-time Front-end Developer. I started by building landing pages in Shopify Liquid and funnels in CheckoutChamp, quickly progressing to working independently after a few weeks of training. Later, we transitioned to Next.js and Tailwind CSS, and I expanded my skills to include Google Tag Manager, Google Analytics, Microsoft Clarity, ShipStation, Maropost, MIDA.so, GitHub, and Vercel.`,
      image: '/current.png',
      imgWidth: '750px',
      icon: <FaLaptop className="w-6 h-6" />
    }
  ]


  return (
   
	<div className="mt-3 rounded-2xl p-10 bg-black/30">
		<h1 className="text-white text-3xl font-bold opacity-0 fade-in animate-[fadeIn_1s_ease-in-out_forwards] [animation-delay:700ms]">Skills and Work Experiences</h1>
		
		<div className="relative w-full">
      <Swiper
			  modules={[Navigation]}
			  navigation={{
			    nextEl: '.custom-next',
			    prevEl: '.custom-prev',
			  }}
			  spaceBetween={30}
			  slidesPerView={1}
			  autoHeight={true} // Smooth height change
			  breakpoints={{
			    1024: { slidesPerView: 1 }
			  }}
			  className="!pt-6 opacity-0 fade-in animate-[fadeIn_1s_ease-in-out_forwards] [animation-delay:700ms]"
			>
        {experiences.map((exp, i) => (
          <SwiperSlide key={i}>
            <div className="grid lg:grid-cols-4 grid-cols-1 bg-black/30 rounded pt-5 pb-3 lg:px-10 px-3">
              <div className="text-white">
                <h1 className="font-bold text-5xl">{exp.year}</h1>
              </div>
              <div className="lg:col-span-3">
                <p className="text-white text-xl font-bold flex items-center gap-2">
                  {exp.icon}
                  {exp.title}
                </p>
                <p 
                	className="mt-3 border-l-2 border-gray-500 pl-3 text-white"
                	dangerouslySetInnerHTML={{ __html: exp.description as string }}
                ></p>
                <div className="mt-3 pl-2">
                  <Image
                    src={exp.image}
                    width={1920}
                    height={1080}
                    alt="Photo"
                    style={{ width: exp.imgWidth, height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom modern arrow buttons */}
      <button className="cursor-pointer custom-prev absolute top-1/2 -left-8 z-10 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button className="cursor-pointer custom-next absolute top-1/2 -right-8 z-10 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

		<div className="opacity-0 fade-in animate-[fadeIn_1s_ease-in-out_forwards] [animation-delay:500ms] mt-5">
			<Image
				className="mx-auto w-full"
				src="/logos.png"
				width={1920}
				height={1080}
				alt="Photo"
				style={{width:"800px"}}
			/>
		</div>
	</div>

  );
}
