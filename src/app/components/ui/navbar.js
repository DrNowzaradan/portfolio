"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../utils/cn";
import "../../globals.css"


export const Menu = ({
  children
}) => {
  return (
    (<nav
      className={'sticky mx-auto gap-5 md:flex hidden justify-between flex-wrap px-8 py-6 backdrop-blur-xl bg-[rgba(0,0,0,0.3)] top-10 max-w-2xl min-w-80 z-50 work-sans-font rounded-full border border-[rgba(255,255,255,0.2)]'} >
      {children}
    </nav>)
  );
};

export const SmallMenu = ({
  children,
  isActive
}) => {
  return (
    (<nav
      className={`${'fixed top-0 w-[280px] h-screen md:hidden flex flex-col px-5 py-3 backdrop-blur-xl bg-[rgba(0,0,0,0.3)] z-50 work-sans-font transition-all'} ${ isActive ? 'left-0' : '-left-[280px]'}`} >
      {children}
    </nav>)
  );
};

export const ToggleButton = ({
  togglePanel,
  isActive
}) => {
  const { scrollYProgress } = useScroll();
 
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (document.documentElement.scrollTop == 0) {
      setVisible(true);
    }
  });

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
      if (typeof current === "number") {
        let direction = current - scrollYProgress.getPrevious();
        console.log(current);
        
        if (scrollYProgress.get() < 0.05) {
          setVisible(true);
        } else if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  );

  return (
    (
      <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={` ${cn("flex max-w-fit top-10 inset-x-0 mx-auto z-[5000] space-x-4")}
         ${isActive ? 'hidden' : 'fixed'}`}
      >
    <button onClick={() => togglePanel(true)} className='w-fit md:hidden flex px-4 py-2 bg-[rgba(0,0,0,0.3)] backdrop-blur-xl border border-[rgba(255,255,255,0.2)] text-white rounded-2xl work-sans-font justify-center items-center gap-3'>Menu <ion-icon name="menu-outline"></ion-icon></button>
        </motion.div>
        </AnimatePresence>)
  );
};


export const PageTab = ({
  currTab,
  setCurrTab,
  togglePanel,
  title,
  href
}) => {
  return (
    (<a href={href} onClick={() => {togglePanel(false); setCurrTab(title)}}
      className={`${"px-5 py-2  border border-transparent hover:border-[rgba(255,255,255,0.5)] rounded-full font-medium relative transition-[color] duration-300"} ${title === currTab ? 'text-black border-[rgba(255,255,255,0.5)]' : 'text-white'}`}>
      {title}
      {title === currTab ? <motion.div className="bg-color" layoutId="bg-color"></motion.div> : null}
    </a>)
  );
};

export const PanelTab = ({
  currTab,
  togglePanel,
  setCurrTab,
  title,
  href
}) => {
  return (
    (<a href={href} onClick={() => {togglePanel(false); setCurrTab(title)}}
      className={`${"px-5 py-2  border border-transparent hover:border-[rgba(255,255,255,0.5)] rounded-full font-medium relative transition-[color] duration-300"} ${title === currTab ? 'text-black border-[rgba(255,255,255,0.5)]' : 'text-white'}`}>
      {title}
      {title === currTab ? <motion.div className="bg-color" layoutId="bg-color-panel"></motion.div> : null}
    </a>)
  );
};