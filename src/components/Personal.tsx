'use client';
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Personal() {

  const birthDate = new Date('1995-05-23'); 

  const [age, setAge] = useState(0);

  useEffect(() => {
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Adjust if birthday hasn't happened yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      years--;
    }

    setAge(years);
  }, []);

  return (
   
	<div className="text-white mt-3 rounded-2xl p-10 bg-black/30 opacity-0 fade-in animate-[fadeIn_1s_ease-in-out_forwards] [animation-delay:700ms]">

		<div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
		 	<div>
	      		<table className="overflow-x-auto min-w-max w-full">
	      			<tbody>
	      				
		      			<tr>
								  <td className="pl-2 py-2" colSpan={2}>
								    <h1 className="text-2xl flex items-center gap-2">
								      <svg
								        xmlns="http://www.w3.org/2000/svg"
								        className="w-6 h-6 text-white"
								        fill="none"
								        viewBox="0 0 24 24"
								        stroke="currentColor"
								        strokeWidth={2}
								      >
								        <path
								          strokeLinecap="round"
								          strokeLinejoin="round"
								          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
								        />
								      </svg>
								      Personal Information
								    </h1>
								  </td>
								</tr>
		      			<tr>
		            	<td className="pl-2 py-2">Full Name</td>
			            <td className="px-4 py-2 font-bold font-oswald">: Ian Dale Pararadiang Blanco</td>
		          	</tr>

		      			<tr>
		            	<td className="pl-2 py-2">Date of Birth</td>
			            <td className="px-4 py-2 font-bold font-oswald">: May 23, 1995</td>
		          	</tr>

		      			<tr>
		            	<td className="pl-2 py-2">Age</td>
			            <td className="px-4 py-2 font-bold font-oswald">: {age}</td>
		          	</tr>

		      			<tr>
		            	<td className="pl-2 py-2">Gender</td>
			            <td className="px-4 py-2 font-bold font-oswald">: Male</td>
	          		</tr>

		      			<tr>
		            	<td className="pl-2 py-2">Contact Number</td>
			            <td className="px-4 py-2 font-bold font-oswald">: +639518485369</td>
		          	</tr>

		      			<tr>
		            	<td className="pl-2 py-2">Email Address</td>
			            <td className="px-4 py-2 font-bold font-oswald">: blanco.iandale@gmail.com</td>
		          	</tr>

		      			<tr>
		            	<td className="pl-2 py-2">Address</td>
			            <td className="px-4 py-2 font-bold font-oswald">: Butuan City, Philippines</td>
		          	</tr>

		      			<tr>
		            	<td className="pl-2 py-2">Marital Status</td>
			            <td className="px-4 py-2 font-bold font-oswald">: Single <i>(with 2 children)</i></td>
		          	</tr>

	      			</tbody>
	      		</table>
			</div>

			<div className="text-center">
			 	<Link 
			 		href="https://drive.google.com/file/d/1spp1pGnoNipIXH8uBvP0SaVWZ4AfryAm/view?usp=sharing"
			 		target="_blank"
			 		title='Click to view my resume.'
		 		>
			 	<Image
			 		className="mx-auto mb-5 animate-pulse"
			 		src="/resume-icon.jpg"
			 		alt="resume"
			 		width={350}
			 		height={350}
			 	/>
			 	</Link>
			</div>
		</div>

	</div>

  );
}
