'use client'
import { Oswald } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
const oswald  = Oswald({
    subsets: ['vietnamese'],
    weight: '600',

})
export default function Header(){
      return(
        <>
            <div className=" flex justify-center items-center flex-col fixed bg-black w-[100%] h-[100vh] hidden z-30 gap-6" id = "bigBlack">

        <li className={` text-white no-underline list-none text-3xl`} onClick={()=>{document.querySelector('#bigBlack')?.classList.add('hidden')}}><Link href = '/'>Home</Link></li>
                <li className={` text-white no-underline list-none text-3xl`} onClick={()=>{document.querySelector('#bigBlack')?.classList.add('hidden')}}><Link href = '/contacts'>Contacts</Link></li>
        <li className={`  text-white no-underline list-none text-3xl`} onClick={()=>{document.querySelector('#bigBlack')?.classList.add('hidden')}}><Link href = '/about'>About us</Link></li>
        <li className={`text-white no-underline list-none text-3xl`} onClick={()=>{document.querySelector('#bigBlack')?.classList.add('hidden')}}><Link href = '/FAQ'>FAQ</Link></li>
            </div>
        <header>
        
    <nav id="header">
        <ul className={`cover justify-center`}>
            <li >
                <div onClick={()=>{document.querySelector('#bigBlack')?.classList.toggle('hidden')}} className = "relative w-10 h-10 sm:w-20 sm:h-20 md:w-30 md:h-30 mb-5 md:hidden m-5 z-40">
                    <Image  fill alt = "Фото команди" src = "/icons/menu.png" />
                </div>
            </li>
        <li className={`${oswald.className} sm:text-2xl md:text-3xl lg:text-4xl `}>TechTune</li>
        <li className={`buttonInHeader opacity-0 md:opacity-100`} ><Link href = '/'>Home</Link></li>
                <li className={`buttonInHeader opacity-0 md:opacity-100`}><Link href = '/contacts'>Contacts</Link></li>
        <li className={`buttonInHeader opacity-0 md:opacity-100`}><Link href = '/about'>About us</Link></li>
        <li className={`buttonInHeader opacity-0 md:opacity-100`}><Link href = '/FAQ'>FAQ</Link></li>
        </ul>
    </nav>
    </header>
    </>
      )
}