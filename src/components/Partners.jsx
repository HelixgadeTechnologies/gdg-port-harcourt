import React from "react";
import {
  google,
  kd,
  bamboo,
  bluechip,
  andela,
  interswitch,
} from "../assets/icons";

const Partners = () => {
  const icons = [google, andela, interswitch, bluechip, bamboo, kd];

  return (
    <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-center items-center mb-16 md:mb-32">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon}
          alt={`partner-${index}`}
          className="object-contain"
        />
      ))}
    </div>
  );
};

export default Partners;
