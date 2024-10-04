'use client';
import Image from 'next/image'
import { IoNavigateOutline } from 'react-icons/io5'
import { TextGenerateEffect } from './TextGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import { Spotlight } from './ui/Spotlight'
import { motion } from 'framer-motion'
import vrPic from '../public/vr.png'
import codePlus from '../public/giphy1.gif'
import { TypewriterEffect } from "./TypewriterEffect";
import { FlipWords } from './flip-words';
import { useEffect, useState } from 'react';
import InfiniteScrollAnimation from './infinitespananimation'; '';

const Hero = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta', 
      };
      const timeString = new Intl.DateTimeFormat('id-ID', options).format(new Date());
      
      setCurrentTime(timeString);
    };

    updateTime(); 
    const timer = setInterval(updateTime, 1000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pb-15 pt-20">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="#db2777" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-100 mb-4">
            Portofolio dibuat dengan React dan Framework Next.js
          </h2>
          <div className="text-center text-bold text-[40px] md:text-5xl lg:text-6xl md:tracking-wider mb-1">
            Halo, 
            <FlipWords
              className="text-center text-bold text-[40px] md:text-5xl lg:text-6xl md:tracking-wider mb-4"
              words={[
                "Namaku adalah",
                "Kula Asmanipun",
                "My Name Is",
                "私の名前は",
                "ich heiße",
                "O meu nome é",
              ]}
            />
          </div>
          <TypewriterEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl md:tracking-wider mb-4"
            words={[
              {
                text: "Adira",
                className: "text-yellow-500 dark:text-yellow-500",
              },
              {
                text: "Bintang",
                className: "text-yellow-500 dark:text-yellow-500",
              },
              {
                text: "Permana,",
                className: "text-yellow-500 dark:text-yellow-500",
              },
              {
                text: "S.Pd",
                className: "text-yellow-500 dark:text-yellow-500",
              },
            ]}
          />

          <div className="flex flex-wrap gap-5 lg:gap-5 w-full mb-11 justify-center mt-6">
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs 
              font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset- 
              border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer">
              <span className="size-8 mr-1 text-xl">📍</span>
              <p className='text-center text-lg'> Sukoharjo, Indonesia </p>
            </div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs 
              font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset- 
              border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer">
              <span className="size-8 mr-1 text-xl">🕒</span>
              <div className="text-xl">{currentTime} WIB</div>
            </div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs 
              font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset- 
              border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer">
              <span className="size-6 mr-1 text-xl">🌟</span>
              <a className='text-center text-lg' href='https://www.instagram.com/adirabintang/'> @adirabintang </a>
            </div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs 
              font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset- 
              border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer">
              <span className="size-6 mr-1 text-xl">🛒</span>
              <a className='text-center text-lg' href='https://www.raphnesia.com'> raphnesia </a>
            </div>
          </div>
          

          <div className="text-center text-[30px] md:text-5xl lg:text-6xl md:tracking-wider p-5">
            <h2 className='text-center text-5xl text-bold mb-1 md:mb-0 '> About 
            <FlipWords
              className="text-center text-5xl text-bold mb-1 md:mb-0"
              words={[
                " / Tentang",
                " / Bab Kula",
                " / Parkara Kaulâh",
                " / 私について",
                " / Men haqimda",
                " / 关于我",
              ]}
            />
            </h2>
            <p className="text-justify font-extralight md:tracking-wider mb-4 mt-5 lg:text-xl text-blue-100 max-w-100">
            Hai, saya Junior IT Developer dari Kabupaten Sukoharjo, Jawa Tengah, yang saat ini open untuk bekerja pada perusahaan / freelance. 
            Saya suka sekali belajar dan berkembang dalam teknologi masa kini dan masa datang, seperti pengembangan augmented reality, virtual reality 
            dan pengembangan teknologi lain yang memberikan dampak yang nyata bagi dunia, indonesia dan tentunya saya sendiri. Saya Selalu bersemangat 
            dengan belajar dan mengembangkan teknologi baru dan merilis karya saya untuk menjaga ekosistem tetap aktif. Saat saya tidak mendalami kode, 
            saya bermain game tentu saja saya suka Honor Of Kings, mendengarkan musik, Menonton Video Youtube atau membaca komik. Inspirasi saya ? 
            Tentu saja ORANG TUA SAYA, Mereka yang terbaik dan sangat penting untuk hidup saya. See you on the top ALL!.
            </p>
            <p className="text-justify font-extralight md:tracking-wider mb-4 mt-5 lg:text-xl text-blue-100 max-w-100">
            Hi, I'm a Junior IT developer from Sukoharjo Regency, Central Java, who is currently open to work in a company / freelance. 
            I love learning and developing in today's and future of technology, such as the development of augmented reality, virtual reality 
            and the development of other technologies that have a real impact on the world, Indonesia and of course myself. 
            I am always excited about learning and developing new technologies and releasing my work to keep the ecosystem active.
            When I'm not delving into code, I play games of course I like Honor Of Kings, listen to music, Watch Youtube Videos or read comics. 
            My inspiration? Of course MY PARENTS, They are the best and very important to my life. See you on the top ALL!.
            </p>
          </div>
          
          <div className="text-center text-[30px] md:text-5xl lg:text-6xl md:tracking-wider p-5">
            <a className="flex flex-col items-center justify-center relative mb-7" href="#about">
              <ShimmerButton 
                title="Tunjukan Hasil Kerja Saya"
                icon={<IoNavigateOutline />}
                position="right"
              />
            </a>
          </div>
        <div className="flex flex-wrap lg:gap-2 ml-6 mr-6 max-w-100 justify-center mt-7">
            <InfiniteScrollAnimation />
        </div>
      </div>
        <motion.div 
          className= "absolute left-[10vw] top-[-10vw] sm:left-[-5vw] sm:top-[-35vw] md:left-[0vw] md:top-[-21vw] lg:left-[-5vw] lg:top-[-2vw]" 
          drag
        >
          <Image
            src={vrPic}
            height="245"
            width="245"
            alt="reality"
            className=""
            draggable="false"
          />
        </motion.div>

        <motion.div 
          className= "absolute left-[10vw] top-[-10vw] sm:left-[65vw] sm:top-[-25vw] md:left-[66vw] md:top-[-21vw] lg:left-[67vw] lg:top-[-2vw]" 
          drag
        >
          <Image
            src={codePlus}
            height="300"
            width="300"
            alt="coding"
            className=""
            draggable="false"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
