'use client'
import Image from "next/image"
import Link from "next/link"

export default function Contact(){

  const copyPhone = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText("+639518485369")
    alert("Phone number copied to clipboard!")
  }

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText("blanco.iandale@gmail.com")
    alert("Email Address copied to clipboard!")
  }

  const openFacebook = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open("https://www.facebook.com/iDale2141", '_blank', 'noopener,noreferrer')
  }

  const openLI = (e: React.MouseEvent) => {
    e.preventDefault()
    window.open("https://www.linkedin.com/in/ian-dale-blanco-063582129", '_blank', 'noopener,noreferrer')
  }

  const contacts = [
    { src: "/contactme.webp", width: 300, action: copyPhone },
    { src: "/gmail.png", width: 300, action: copyEmail },
    { src: "/fb.webp", width: 300, action: openFacebook },
    { src: "/linkedin.png", width: 280, action: openLI }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-6 pt-3">
      {contacts.map((img, i) => (
        <div key={i} className="transition-all duration-300 hover:scale-110">
          <Link href="#" onClick={img.action}>
            <Image
              className="cursor-pointer"
              src={img.src}
              width={img.width}
              height={img.width}
              alt="Contact icon"
              style={{ width: `${img.width}px` }}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}
