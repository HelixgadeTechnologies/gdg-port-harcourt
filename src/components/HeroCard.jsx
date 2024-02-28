import React from 'react'
import Button from './elements/Button';
import { arrowup, arrow, kite } from '../assets/icons';
import { useRedirect } from "../hooks/useRedirect";

const HeroCard = () => {
    const {  redirectToGDG, redirectToWhatsApp } = useRedirect();
  return (
    <div className="mt-24 py-8 md:py-20 lg:py-28 w-[335px] md:w-[540px] lg:w-[898px] grid justify-center items-center mx-auto text-center gap-8 relative">
      <h1 className=" font-extrabold text-3xl md:text-5xl lg:text-7xl xl:text-[84px] ">
        GDG Port Harcourt Community
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl">
        A collaborative hub for enthusiasts exploring Google and advanced
        software development technologies to learn, practice, and build
        innovative problem-solving applications.
      </p>

      <img
        src={arrow}
        className="absolute top-0  md:top-0 md:right-7 w-[100px] md:w-[200px] lg:w-[305px] right-9 lg:right-20 xl:right-14"
        alt="arrow-icon"
      />
      <img
        src={kite}
        className="absolute w-[80px] md:w-[120px] lg:w-[186px] bottom-24 left-3 md:bottom-0 md:top-32 md:left-0 lg:top-44 lg:left-10 xl:left-0 xl:top-48"
        alt="kite-icon"
      />

      <div className="flex justify-center items-center gap-4">
        <Button
          className={` rounded-[10px] border border-black bg-black text-white whitespace-nowrap p-3 lg:p-4 xl:p-6`}
          onClick={redirectToWhatsApp}
        >
          Join our community
        </Button>
        <Button
          className={` rounded-[10px] border flex items-center gap-2 bg-yellow text-black whitespace-nowrap p-3 lg:p-4 xl:p-6`}
          onClick={redirectToGDG}
        >
          Learn More <img src={arrowup} alt="arrowup" />
        </Button>
      </div>
      
    </div>
  );
}

export default HeroCard