import React from 'react'
import Button from './elements/Button';
import { useRedirect } from '../hooks/useRedirect';
import { arrowup, loop } from '../assets/icons';

const About = () => {
    const { redirectToGDG } = useRedirect();
  return (
    <div className="grid gap-6 md:gap-8 relative mt-10 lg:mx-5 xl:mx-20 ">
      <img
        src={loop}
        alt="loop"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 "
      />
      <h3 className="text-3xl md:text-4xl lg:text-[44px] font-[900] mt-24">
        About Us
      </h3>
      <p className="  text-lg xl:text-2xl font-medium">
        GDG Port Harcourt welcomes you to our website. As we've created a
        vibrant space for enthusiasts keen on harnessing the power of Google and
        other cutting-edge software development technologies. Our community
        thrives on learning, practicing, and collaboratively building
        problem-solving applications.
      </p>
      <Button
        className={` w-fit rounded-[10px] border flex items-center font-medium gap-3 bg-yellow text-black whitespace-nowrap p-3 px-6 lg:p-4 xl:p-6`}
        onClick={redirectToGDG}
      >
        Learn More <img src={arrowup} alt="arrowup" />
      </Button>
    </div>
  );
}

export default About