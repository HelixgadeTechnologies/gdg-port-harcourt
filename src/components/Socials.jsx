import React from "react";
import { insta, facebook, twitter, linkedin } from "../assets/icons";
import { useRedirect } from "../hooks/useRedirect";


const Socials = () => {
  const { redirectToLinkedin, redirectToFacebook, redirectToInsta, redirectToTwitter } = useRedirect();
  const icons = [
      { name: "linkedin", icon: linkedin, onClick: redirectToLinkedin },
      { name: "facebook", icon: facebook, onClick: redirectToFacebook },
    { name: "instagram", icon: insta, onClick: redirectToInsta },
    { name: "twitter", icon: twitter, onClick: redirectToTwitter },
  ];
  return (
    <div className="grid lg:flex justify-center items-center gap-4 ">
      {icons.map((icon, index) => (
        <img key={index} src={icon.icon}  title={icon.name} alt={icon.name} onClick={icon.onClick} />
      ))}
    </div>
  );
};

export default Socials;
