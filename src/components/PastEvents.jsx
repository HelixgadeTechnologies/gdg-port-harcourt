import React from "react";
import { blackgdg } from "../assets/images";

const PastEvents = () => {
  const events = [
    {
      image: blackgdg,
      alt: "event image",
      title: "DevFest South-South 2023 - Bonny Island",
      date: "Apr 6, 2024 - Conference",
      description:
        "It's the biggest Tech Conference in South-South Nigeria!!! With 13 solid GDG. We will have talks to cover various fields like Product Design, Mobile App Development etc. You really don't want to miss it.",
    },
    {
      image: blackgdg,
      alt: "event image",
      title: "DevFest South-South 2023 - Bonny Island",
      date: "Apr 6, 2024 - Conference",
      description:
        "It's the biggest Tech Conference in South-South Nigeria!!! With 13 solid GDG. We will have talks to cover various fields like Product Design, Mobile App Development etc. You really don't want to miss it.",
    },
    {
      image: blackgdg,
      alt: "event image",
      title: "DevFest South-South 2023 - Bonny Island",
      date: "Apr 6, 2024 - Conference",
      description:
        "It's the biggest Tech Conference in South-South Nigeria!!! With 13 solid GDG. We will have talks to cover various fields like Product Design, Mobile App Development etc. You really don't want to miss it.",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3   gap-8">
      {events.map((event, index) => (
        <div
          key={index}
          className="w-fit drop-shadow-card shadow-event rounded-[30px]"
        >
          <img src={event.image} alt={event.alt} />
          <div className="p-4 grid gap-3 md:gap-5 my-3 md:my-6">
            <p className="font-[400] text-xs md:text-sm lg:text-base">
              {event.date}
            </p>
            <p className="text-xl font-bold md:text-2xl lg:text-3xl">{event.title}</p>
            <p className="md:text-[20px] font-[400]">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PastEvents;
