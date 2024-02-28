import React from 'react'
import Nav from './components/Nav'
import { hero, aside, events } from './assets/images'
import { gdg, arrow, insta, facebook, twitter, linkedin } from './assets/icons'
import {
  Link,
  Element,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import HeroCard from './components/HeroCard';
import Partners from './components/Partners';
import { useRedirect } from './hooks/useRedirect';
import Button from './components/elements/Button';
import Organizers from './components/Organizers';
import Events from './components/Events';
import About from './components/About';
import PastEvents from './components/PastEvents';
import Socials from './components/Socials';

const App = () => {
   const { redirectToGDG, redirectToWhatsApp } = useRedirect();
  return (
    <div className="font-plusJakarta">
      <header className="bg-secondary text-primary grid justify-center items-center pb-[111px]">
        <Nav />
        <HeroCard />

        <div className="mx-10 lg:mx-20">
          <img
            src={hero}
            className="md:w-full lg:rounded-[64px] xl:h-[693.45px] object-cover"
            alt="hero-image"
          />
        </div>
      </header>
      <main>
        <section className="grid justify-center items-center mt-20  lg:mt-28 px-6">
          <h3 className="text-2xl lg:text-[44px] font-bold md:font-extrabold lg:w-[863px] mx-auto md:text-center mb-12 lg:mb-14 lg:leading-[59.4px] ">
            Introducing our esteemed sponsors, making innovation happen
          </h3>
          <Partners />
        </section>
        {/* //About section starts */}
        <Element name="about">
          <aside className="grid lg:grid-cols-2 justify-center items-center pb-6 px-6 lg:p-0 bg-secondary mb-6">
            <img src={aside} className="" alt="image of organizer" />
            <About />
          </aside>
        </Element>
        {/* //About section ends  */}
        {/* //Upcoming events section starts */}
        <Element name="newEvents">
          <section className="grid justify-center items-center my-20  lg:my-28 px-6 lg:px-20 xl:px-36 relative">
            <img
              src={arrow}
              alt="arrow-icon"
              className="absolute w-[154px] top-0 left-24 md:left-1/2 md:transform md:-translate-x-1/2 "
            />
            <h4 className="text-3xl lg:text-3xl xl:text-[44px] font-bold mt-16 md:text-center">
              Upcoming Events
            </h4>
            <Events />
          </section>
        </Element>
        {/* //Upcoming events section ends  */}

        {/* Organizers section starts */}
        <Element name="team">
          <section className="grid justify-center items-center mt-20  lg:mt-28 px-6 lg:px-20 xl:px-36 pb-16 md:pb-28 relative bg-secondary">
            <h4 className="text-3xl lg:text-3xl xl:text-[44px] font-bold my-12 md:my-28 md:text-center">
              GDG PH Organizers
            </h4>
            <Organizers />
          </section>
        </Element>
        {/* Organizers section ends */}
        <section className="bg-banner bg-cover bg-no-repeat bg-center w-full mb-20  lg:mb-28 flex flex-col justify-center items-center text-white py-16 md:py-28">
          <div className="w-[335px] md:w-[540px] lg:w-[898px] flex flex-col gap-4 md:gap-8 justify-center items-center">
            <h4 className="text-xl md:text-3xl xl:text-[44px] font-bold ">
              Connect with Creatives near you
            </h4>
            <p className="text-center md:text-lg md:w-[540px]">
              When you join a Google Developer Group, you'll have the
              opportunity to learn new skills in a variety of formats. You’ll
              also meet local developers virtually or in-person with similar
              interests in technology.{" "}
            </p>
            <Button
              className={` w-fit rounded-[10px]  flex items-center font-medium gap-3 bg-yellow  whitespace-nowrap p-3 px-6 lg:p-4 h-fit xl:p-6`}
              onClick={redirectToWhatsApp}
            >
              Join our Community
            </Button>
          </div>
        </section>
        {/* //Past events section starts */}
        <Element name="oldEvents">
          <section className="grid justify-center items-center my-20  lg:my-28 px-6 lg:px-20 xl:px-28">
            <h5 className="font-bold text-2xl md:text-4xl xl:text-[44px] mb-16 md:mb-28 md:text-center w-[335px] md:w-[658px] mx-auto">
              We have hosted amazing events in the past - check it out
            </h5>
            <PastEvents />
          </section>
        </Element>
        {/* //Past events section ends */}
      </main>
      <footer className="bg-black text-white w-full grid justify-center items-center mt-20 pt-16 lg:pt-20 lg:mt-28  lg:px-20 xl:px-28">
        <section className="grid md:grid-cols-2 justify-between gap-6 xl:gap-20 px-6">
          <div className="">
            <h1 className=" font-bold text-lg lg:text-xl xl:text-2xl flex items-center gap-4 ">
              <img
                src={gdg}
                className="w-[40px] h-[40px] md:w-[67px] md:h-[67px] "
                alt="gdg"
              />{" "}
              GDG Port Harcourt
            </h1>
            <p className="md:text-lg mt-5 ">
              A collaborative hub for enthusiasts exploring Google and advanced
              software development technologies to learn, practice, and build
              innovative problem-solving applications.
            </p>
          </div>
          <div className="flex justify-between items-center lg:items-start">
            <div className="">
              <h5 className="text-lg lg:text-2xl xl:text-2xl">Links</h5>
              <ul className="grid gap-2 md:gap-3 md:mt-1 font-medium">
                <li className="mt-[18px]">
                  <Link to="about" smooth={true}>
                    About
                  </Link>
                </li>

                <li>
                  <Link to="newEvents" smooth={true}>
                    Upcoming Events
                  </Link>
                </li>

                <li>
                  <Link to="oldEvents" smooth={true}>
                    Past Events
                  </Link>
                </li>

                <li>
                  <Link to="team" smooth={true}>
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="gallery" smooth={true}>
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h5 className="text-lg lg:text-xl xl:text-2xl">Follow Us</h5>
              <div className="mt-4 md:mt-8">
                <Socials />
              </div>
            </div>
          </div>
        </section>
        <div className="border border-white w-full mt-8"></div>
        <p className="text-center text-lg mt-[22px] mb-8 md:mb-16 lg:mb-28">
          © 2024 GDG Port Harcourt Community
        </p>
      </footer>
    </div>
  );
}

export default App