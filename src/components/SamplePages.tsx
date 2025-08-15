'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

export default function SamplePages() {
  return (
  	<>

	    <Swiper
	      modules={[Navigation, Pagination]}
	      navigation
	      pagination={{ clickable: true }}
	      spaceBetween={30}
	      slidesPerView={1}
	      className="pb-10"
	    >
	      <SwiperSlide>
	        <SamplePage
	          title="VNSH Website v1"
	          mainImage="/sample1.png"
	          link="https://vnsh-template.vercel.app/"
	          github="https://github.com/iDale2141/vnsh-template/"
	          description="A responsive landing page built with Nextjs and TailwindCSS, featuring a fast, mobile-first design and clean, scalable code. The checkout page is powered by CheckoutChamp for a seamless, conversion-focused buying experience, making it ideal for eCommerce and product launches."
	          tech={['Nextjs', 'TailwindCSS', 'CheckoutChamp']}
	          secondaryImage="/current.png"
	        />
	      </SwiperSlide>

	      <SwiperSlide>
	        <SamplePage
	          title="VNSH Website v2"
	          mainImage="/sample2.png"
	          link="https://https://new-vnsh.vercel.app/"
	          github="https://https://github.com/iDale2141/new-vnsh-template"
	          description="A sleek redesign built with Next.js and TailwindCSS, featuring a dark, minimal layout, smooth animations, and refined typography. Enhanced visuals and subtle transitions create a modern, immersive feel, while the CheckoutChamp powered checkout ensures a seamless, conversion-focused buying experience."
	          tech={['Nextjs', 'TailwindCSS', 'CheckoutChamp']}
	          secondaryImage="/current.png"
	        />
	      </SwiperSlide>

	      <SwiperSlide>
	        <SamplePage
	          title="My Portfolio"
	          mainImage="/sample3.png"
	          link="#"
	          github="https://github.com/iDale2141/portfolio"
	          description="You’re looking at it right now! Built with Next.js and TailwindCSS, this site is my personal hub for showcasing projects, sharing my skills, and experimenting with clean, modern UI designs. It’s fast and designed to make browsing my work smooth and enjoyable."
	          tech={['Nextjs', 'TailwindCSS']}
	          secondaryImage="/git2.png"
	        />
	      </SwiperSlide>

	      <style jsx global>{`
		  .swiper-button-prev,
		  .swiper-button-next {
		    width: 40px;
		    height: 40px;
		    border-radius: 50%;
		    background: rgba(255, 255, 255, 0.1);
		    backdrop-filter: blur(4px);
		    display: flex;
		    align-items: center;
		    justify-content: center;
		    color: white;
		    transition: background 0.3s ease;
		  }
		  .swiper-button-prev:hover,
		  .swiper-button-next:hover {
		    background: rgba(255, 255, 255, 0.2);
		  }
		  .swiper-button-prev::after,
		  .swiper-button-next::after {
		    font-size: 18px;
		    font-weight: bold;
		    position: static; /* remove Swiper's absolute positioning */
		    line-height: 1;   /* no vertical offset */
		  }
		`}</style>
	    </Swiper>
	</>
  );
}

function SamplePage({
  title,
  mainImage,
  link,
  github,
  description,
  tech,
  secondaryImage,
}: {
  title: string;
  mainImage: string;
  link: string;
  github: string;
  description: string;
  tech: string[];
  secondaryImage?: string;
}) {
  return (
    <div className="text-white mt-3 rounded-2xl p-10 bg-black/20 opacity-0 fade-in animate-[fadeIn_1s_ease-in-out_forwards] [animation-delay:700ms]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <Image
            className="mx-auto w-full shadow"
            src={mainImage}
            width={1920}
            height={1080}
            alt={title}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <h1 className="font-roboto font-bold lg:text-5xl font-xl">{title}</h1>
          <hr className="my-3 text-gray-100" />
          <div className="flex gap-4 text-xl mt-3 font-roboto">
            {ButtonLink(link, FiExternalLink, "Link")}
            {ButtonLink(github, FaGithub, "Github")}
          </div>
          <p className="border-l-1 border-gray-400 pl-4 italic mt-5 font-roboto text-lg text-white">
            {description.split(" ").map((word, i) =>
              tech.includes(word.replace(/[^a-zA-Z0-9]/g, "")) ? (
                <span
                  key={i}
                  className="text-green-400 font-semibold drop-shadow-[0_0_4px_rgba(34,197,94,0.8)]"
                >
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </p>
          {secondaryImage && (
            <div>
              <Image
                className="mt-5"
                src={secondaryImage}
                width={1920}
                height={1080}
                alt="Screenshot"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ButtonLink(link: string, Icon: React.ElementType, text: string) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2 shrink-0
        mt-3 px-4 py-2
        bg-white text-black font-bold
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
        hover:rounded-tl-none hover:rounded-br-none hover:rounded-bl-2xl hover:rounded-tr-2xl
        rounded-tl-2xl rounded-br-2xl
        transition-all ease-in-out duration-300
        focus:outline-none focus-visible:outline-none
  		ring-0 focus:ring-0 focus-visible:ring-0"
    >
      <Icon size={18} /> {text}
    </a>
  );
}
