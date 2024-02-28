import React, { createContext } from "react";

export const RedirectContext = createContext();

export const RedirectProvider = ({ children }) => {
  const redirectToGDG = () => {
    window.open("https://gdg.community.dev/gdg-port-harcourt/", "_blank");
  };

  const redirectToWhatsApp = () => {
    window.open("https://chat.whatsapp.com/8DxFlE14fO21PxMQcTOfoh", "_blank");
  };
  const redirectToTwitter = () => {
    window.open("https://twitter.com/GDGPHC", "_blank");
  };
  const redirectToFacebook = () => {
    window.open("https://web.facebook.com/gdgportharcourt", "_blank");
  };
  const redirectToLinkedin = () => {
    window.open(
      "https://www.linkedin.com/company/google-developer-group-port-harcourt/",
      "_blank"
    );
  };
  const redirectToInsta = () => {
    window.open("https://www.instagram.com/gdgphc/", "_blank");
  };

  return (
    <RedirectContext.Provider value={{ redirectToGDG, redirectToWhatsApp, redirectToTwitter, redirectToFacebook, redirectToLinkedin, redirectToInsta }}>
      {children}
    </RedirectContext.Provider>
  );
};
