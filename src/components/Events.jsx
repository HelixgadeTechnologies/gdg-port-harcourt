import React from 'react'
import Button from './elements/Button';
import { useRedirect } from '../hooks/useRedirect';
import { arrowup, loop, bland } from '../assets/icons';
import { events } from '../assets/images';

const Events = () => {
    const { redirectToGDG} = useRedirect();
  return (
    <div className="mt-14 lg:mt-28 grid lg:grid-cols-2">
      <div className="grid gap-5 md:gap-8 ">
        <p className="font-bold text-sm md:text-[22px] text-black">
          Apr 6, 2024 - Tech Talk
        </p>
        <p className="font-bold text-[22px] md:text-[44px] text-black">
          GDG Port Harcout - International Womens Day
        </p>
        <p className=" text-lg xl:text-2xl text-black font-medium">
          International Women’s Day (IWD) is Women Techmakers’ largest annual
          campaign where Ambassador host and speak at events all around the
          world during the months of March and April in celebration of this
          moment. From big summits to smaller, intimate gatherings, IWD is a
          time to host and speak at events that create connections, educate and
          inspire your tech community.
        </p>
        <Button
          className={` w-fit rounded-[10px] border flex items-center font-medium gap-3 bg-yellow text-black whitespace-nowrap p-3 px-6 lg:p-4 h-fit xl:p-6`}
          onClick={redirectToGDG}
        >
          Learn More <img src={arrowup} alt="arrowup" />
        </Button>
      </div>
      <div className="relative mt-8 md:mt-10 lg:mt-0 drop-shadow-imageShadow">
        <img
          src={loop}
          alt="loop"
          className="absolute top-0 left-0 w-[125px] "
        />
        <img src={events} className="w-fit" alt="events" />
        <img
          src={bland}
          alt="bland"
          className="absolute w-[125px] bottom-0 right-0  "
        />
      </div>
    </div>
  );
}

export default Events