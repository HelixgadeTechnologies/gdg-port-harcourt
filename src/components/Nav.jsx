import React, { useEffect, useState } from "react";
import { gdg } from "../assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { useRedirect } from "../hooks/useRedirect";
import Button from "./elements/Button";

const Nav = ({ className }) => {
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { redirectToWhatsApp } = useRedirect();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 h-[100px] w-full z-30  bg-secondary flex justify-between items-center px-6  py-6 lg:px-12 xl:px-[120.5px]  lg:py-[49.5px] whitespace-nowrap ${className}`}
    >
      <h1 className="text-primary font-bold text-sm lg:text-lg flex items-center gap-4 ">
        <img
          src={gdg}
          className="w-[40px] h-[40px] md:w-[67px] md:h-[67px] "
          alt="gdg"
        />{" "}
        GDG Port Harcourt
      </h1>

      <FontAwesomeIcon
        icon={faBars}
        onClick={toggleMenu}
        className="w-[30px] h-[30px] sm:hidden "
      />

      <div className="hidden sm:flex">
        <ul className="hidden md:flex items-center justify-between gap-8   text-nav font-medium xl:text-lg">
          <li>
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

      <Button
        className={`hidden xl:block rounded-[10px] border border-black bg-black text-white whitespace-nowrap p-3`}
        onClick={redirectToWhatsApp}
      >
        Join our community
      </Button>
      {isMenuOpen && (
        <div className="nav fixed right-0 top-0 bg-secondary p-14 w-[65%] h-screen z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
            className="absolute right-4 top-6 w-[30px] h-[30px] "
            onClick={toggleMenu}
          >
            <style>svg</style>
            <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
          </svg>
          <ul className="  grid gap-8  pt-12 text-nav font-medium text-lg">
            <li>
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
            <li className="rounded-[10px] border border-black bg-black text-white whitespace-nowrap p-3">
              <Button className={``} onClick={redirectToWhatsApp}>
                Join our community
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
