import React, { createContext } from "react";

export const RedirectContext = createContext();

export const RedirectProvider = ({ children }) => {
  const redirectToGDG = () => {
    window.open("https://gdg.community.dev/gdg-port-harcourt/", "_blank");
  };

  const redirectToWhatsApp = () => {
    window.open("https://chat.whatsapp.com/8DxFlE14fO21PxMQcTOfoh", "_blank");
  };

  return (
    <RedirectContext.Provider value={{ redirectToGDG, redirectToWhatsApp }}>
      {children}
    </RedirectContext.Provider>
  );
};
