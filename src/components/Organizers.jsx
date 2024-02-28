import React from 'react'
import { organiser1, organiser2 } from '../assets/images'

const Organizers = () => {
    const organizers = [
      {
        image: organiser1,
        alt: "organiser image",
        name: "Ayaosi Godfrey",
        title: "GDG PH Organizer",
      },
      {
        image: organiser2,
        alt: "organiser image",
        name: "Ewor Peace",
        title: "WTM Lead",
      },
      {
        image: organiser1,
        alt: "organiser image",
        name: "Ayaosi Godfrey",
        title: "GDG PH Organizer",
      },
    ];
  return (
    <div className="flex flex-col md:flex-row gap-8 ">
      {organizers.map((organizer, index) => (
        <div key={index} className="bg-white ">
          <img src={organizer.image} alt={organizer.alt} />
          <div className="pl-6 pt-6">
            <p className="text-2xl lg:text-[32px] font-[900]">
              {organizer.name}
            </p>
            <p className="pt-4 pb-6 text-lg font-medium ">{organizer.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Organizers