import { Oswald } from "next/font/google" 
import Image from "next/image"
import Link from "next/link"

const oswald  = Oswald({
    subsets: ['vietnamese'],
    weight: '600',

})
export default function Footer(){
      return(
    <nav id="footer">
        <ul className="cover">
            <ul className="flex justify-center items-center flex-col gap-1 sm:gap2 md:gap-3 ">
        <li className={`${oswald.className} sm:text-2xl md:text-3xl lg:text-4xl m-3 sm:m-0 md:m-0`}>Profile website</li>
        <li className={`text-white no-underline list-none text-[1.5rem] sm:text-xl md:text-3xl `} ><Link href = '/'>Home</Link></li>
                <li className={`text-white no-underline list-none text-[1.3rem] sm:text-xl md:text-3xl  `}><Link href = '/contacts'>Contacts</Link></li>
        <li className={`text-white no-underline list-none text-[1.3rem] sm:text-xl md:text-3xl  `}><Link href = '/about'>About us</Link></li>
        <li className={`text-white no-underline list-none text-[1.3rem] sm:text-xl md:text-3xl  `}><Link href = '/FAQ'>FAQ</Link></li>
        </ul>
                    <ul>
                        <div className="covericons">
        <li className={`${oswald.className}  sm:text-2xl md:text-3xl lg:text-4xl`}>Contact</li>
<ul className="social">
  
{/*
<img
alt = "Instagram"
src="/icons/instagram.svg"
className="w-10 h-10 sm:w-13 sm:h-13 md:h-20 md:w-20"


></img>

<img
alt = "Facebook"
src="/icons/facebook.svg"
className="w-10 h-10 sm:w-13 sm:h-13 md:w-20 md:h-20"
></img>
<img
alt = "Instagram"
src="/icons/github.svg"
className="w-10 h-10 sm:w-13 sm:h-13 md:w-20 md:h-20"
></img>
<img
alt = "Instagram"
src="/icons/telegram.svg"
className="w-10 h-10 sm:w-13 sm:h-13 md:w-20 md:h-20"
></img>



  {/*<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style = {{position :'relative'}}>
   <img
    src="/icons/instagram.png"
    alt="Instagram"
    className="w-full h-auto sm:max-w-[20px] md:max-w-[60px] lg:max-w-[100px]"
  />

  </a>*/}
<div className="relative w-10 h-10 sm:w-13 sm:h-13 md:w-20 md:h-20">
  <Image
    src="/icons/instagram.svg"
    alt="Instagram"
    fill
    className="object-contain"
  />
</div>

<div className="relative w-10 h-10 sm:w-13 sm:h-13 md:w-20 md:h-20">
  <Image
    src="/icons/facebook.svg"
    alt="Facebook"
    fill
    className="object-contain"
  />
</div>

<div className="relative w-10 h-10 sm:w-13 sm:h-13 md:w-20 md:h-20">
  <Image
    src="/icons/github.svg"
    alt="GitHub"
    fill
    className="object-contain"
  />
</div>

<div className="relative w-10 h-10 sm:w-13 sm:h-13 md:w-20 md:h-20">
  <Image
    src="/icons/telegram.svg"
    alt="Telegram"
    fill
    className="object-contain"
  />
</div>

</ul>
</div>
<li>
 

    Іконки від Icons8




 
</li>
        </ul>

        </ul>
    </nav>
      )
}