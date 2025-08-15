'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header(){
 	const pathname = usePathname();

	return(
		<header className="py-5 items-center">
		  <div className="grid lg:grid-cols-2 grid-cols-1">
		    <div className="flex items-center opacity-0 fade-in animate-[fadeIn_1s_ease-in-out_forwards] [animation-delay:0ms]">
		      <Link href="/">
		      	<h2 className="font-oswald font-bold text-white lg:text-5xl">Dale Blanco</h2>
		      </Link>
		    </div>
		    <div className="lg:block hidden opacity-0 fade-in animate-[fadeIn_1s_ease-in-out_forwards] [animation-delay:700ms]">
		      <ul className="flex font-oswald mt-2 gap-10 items-center list-none justify-center w-full font-medium text-white">
		        <li className="cursor-pointer">
		        	<Link href="/personal-details" className={pathname === '/personal-details' ? 'font-bold !text-[18px]' : ''}>
			        	Personal Details
			      	</Link>
		      	</li>
		        <li className="cursor-pointer">
		        	<Link href="/skills" className={pathname === '/skills' ? 'font-bold !text-[18px]' : ''}>
		        		Skills & Work Experiences
		        	</Link>
		        </li>
		        <li className="cursor-pointer">
		        	<Link href="/sample-pages" className={pathname === '/sample-pages' ? 'font-bold !text-[18px]' : ''}>
		        		Sample Pages
		        	</Link>
		        </li>
		        <li className="cursor-pointer">
		        	<Link href="/contact" className={pathname === '/contact' ? 'font-bold !text-[18px]' : ''}>
		        		Contact
		        	</Link>
	        	</li>
		      </ul>
		    </div>
		  </div>
		</header>
	);
}