"use client";
import React, { useState, useEffect, useId, useRef } from 'react';
import { prowebsites } from '@/data';
import { AnimatePresence, motion } from 'framer-motion';
import { PinContainer } from './ui/3d-pin';
import { useOutsideClick } from "@/hook/outside-click"; // Correct the import path

interface Card {
  id: string;
  title: string;
  des: string;
  des2: string;
  img: string;
  iconLists: string[];
}

const KembangProject = () => {
  const [activeCard, setActiveCard] = useState<Card | null>(null);
  const id = useId();
  const ref = useRef(null);

  useOutsideClick(ref, () => setActiveCard(null)); // Correct useOutsideClick usage

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveCard(null);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCard]);

  const handleCardClick = (id: string, title: string, des: string, des2: string, img: string, iconLists: string[]) => {
    setActiveCard({ id, title, des, des2, img, iconLists });
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
  };
  
  

  return (
    <div className="py-15 text-center">
      <h1 className="heading">
        Project terkini
        <span className="text-yellow-500 mt-6"> yang sedang saya kembangkan</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-2 gap-4 gap-x-14 gap-y-0 ">
        {prowebsites.map(({ id, title, des, des2, img, iconLists,  }) => (
          <div
            key={id}
            className="lg:min-h-[34rem] h-[30rem] my-40 flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer
              className="rounded-[20px] max-w-sm p-4 sm:p-10 z-10"
              title={title}
              onClick={() => handleCardClick(id.toString(), title, des, des2, img, iconLists)} // Ensure correct types
            >
              <div className="relative flex items-center justify-between sm:w-96 w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] left-5">
                <img
                  src={img}
                  alt={title}
                  className="object-contain relative items-center justify-center"
                  height="250"
                  width="250"
                />
              </div>
              <h1>{title}</h1>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 text-extralight text-justify mt-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon) => (
                    <div key={icon} className="border border-white/[0.2] rounded-full mr-2">
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
      

      {/* Expanded Card */}
      <AnimatePresence>
  {activeCard && (
    <>
      {/* Background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/20 h-full w-full z-10"
      />

      {/* Card content with animation */}
      <div className="fixed inset-0 grid place-items-center z-[100]">
        <motion.div
          layoutId={`card-${activeCard.id}-${id}`}  
          ref={ref}
          className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div>
            <img
              src={activeCard.img}
              alt={activeCard.title}
              className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
            />
          </motion.div>

          <div>
            <div className="flex justify-between items-start p-4">
              <div>
                <motion.h3 className=" text-white dark:text-white text-center md:text-left font-bold">
                  {activeCard.title}
                </motion.h3>
                <motion.p className=" text-neutral-600 dark:text-neutral-400 text-start md:text-left">
                  {activeCard.des2}
                </motion.p>
                <motion.p className=" text-white text-justify md:text-left mt-7 ">
                  Bahasa Pemrograman dan Framework yang dipakai :
                </motion.p>
                <motion.div className="flex justify-between mt-2 mb-3">
                  <div className="flex items-center">
                    {activeCard.iconLists.map((icon) => (
                      <div key={icon} className="border border-white/[0.2] rounded-full mr-2">
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="pt-4 relative px-4">
            <motion.div className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400">
              {/* Add content if needed */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  )}
</AnimatePresence>

    </div>
  );
};

export default KembangProject;
