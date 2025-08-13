import Image from "next/image";
import Link from 'next/link';

export default function Hero(){
	return(
		<div className="mt-3 rounded-2xl p-10 bg-black/30 h-[500px] opacity-0 fade-in animate-[fadeIn_1s_ease-in-out_forwards] [animation-delay:700ms]">
			<h1 className="!text-white font-oswald font-extrabold lg:text-7xl text-[32px]">Web Developer</h1>
			
			<div className="mt-5 py-5">
				<Image
				    src="/logos.png"
				    alt="logos"
				    width={700}
				    height={550}
				    style={{height:"auto"}}
				/>

			</div>

			<div className="mt-5 lg:pr-[40%] lg:text-xl">
				<p className="text-white border-l-4 border-gray-400 pl-4 italic">
				I create modern, high-performing websites from the ground up — combining sleek, responsive design with solid, reliable functionality. From crafting smooth user experiences to building the systems that power them, I bring ideas to life with clean, efficient code.</p>
			</div>
			<div className="mt-10">			
				<Link 
					href="/personal-details" 
					className="
						transition-all 
						duration-300 
						hover:rounded-tl-none 
						hover:rounded-br-none 
						hover:rounded-bl-2xl 
						hover:rounded-tr-2xl 
						bg-white 
						!text-black 
						font-oswald 
						font-bold 
						text-xl 
						rounded-tl-2xl 
						rounded-br-2xl 
						border 
						p-3"> 
						Learn More About Me 
				</Link>
			</div>
		</div>
	);
}