import React from "react";
import { insta, facebook, twitter, linkedin } from "../assets/icons";

const icons = [
    { name: "linkedin", icon: linkedin },
    { name: "facebook", icon: facebook },
  { name: "insta", icon: insta },
  { name: "twitter", icon: twitter },
];

const Socials = () => {
  return (
    <div className="grid lg:flex justify-center items-center gap-4 ">
      {icons.map((icon, index) => (
        <img key={index} src={icon.icon} alt={icon.name} />
      ))}
    </div>
  );
};

export default Socials;
