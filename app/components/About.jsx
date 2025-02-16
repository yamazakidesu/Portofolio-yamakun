import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className='text-center mb-2 text-lg font-Ovo'>
            Introdution</h4>
        <h2 className='text-center text-5xl font-Ovo'>
            About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="w-64 sm:w-80 rounded-3x1 max-w-none">
                    <Image src={assets.user_image} alt='user' className='w-fullrounded-3x1'/>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                    Hello! I’m a passionate Fullstack Developer who recently stepped into the world of web development. 
                    With hands-on experience in building personal projects, 
                    I have honed my skills in HTML, CSS, and JavaScript,
                    creating responsive and user-friendly web applications. 
                    I am eager to apply my knowledge, learn from industry experts,
                    and contribute to companies by helping them achieve their goals through seamless and visually appealing digital experiences. 
                    Excited for new challenges and opportunities to grow
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {infoList.map(({icon, iconDark, title, description}, index)=>(
                            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer  hover:bg-lightHover
                            hover: -translate-y-1 duration-500 hover:shadow-black" 
                            key={index}>
                                <Image src={icon} alt={title} className="w-7 mt-3"/>
                                <h3 className="my-4 font-semibold text-black-700">{title}</h3>
                                <p className="text-black-600 text-sm">{description}</p>

                            </li>
                        ))}
                    </ul>

                </div>
            </div>  
        </div>
    )
}

export default About