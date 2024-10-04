"use client";
import { projects } from '@/data'
import React, { use } from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import { motion } from 'framer-motion';


const TechStack = () => {
  return (
    <div className='py-15 text-center'>
        <h1 className='heading'>
            Teknologi yang saya gunakan dalam {''}
            <span className="text-yellow-500 mt-6"> Pengembangan Project Terkini

            </span>
        </h1>
        <div className='flex flex-row flex-wrap items-center justify-center p-4 gap-8 mt-10 mb-10'> 
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='lg:min-h-[15rem]'>
                    <BackgroundGradient className='rounded-[20px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900' title={title} href={link}>
                        <div className='relative flex items-center justify-between sm:w-96 w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] left-5'>
                            <img 
                                src={img} 
                                alt={title}
                                className='object-contain relative items-center justify-center '
                                height="250"
                                width="250"
                                />
                        </div>
                        <h1>
                            {title} 
                        </h1>
                        <p className='text-sm text-neutral-600 dark:text-neutral-400 text-light'>
                            {des}
                        </p>
                    </BackgroundGradient>

                </div>
            ))}

        </div>
    </div>
    

    
    
  ) 
}
export default TechStack

