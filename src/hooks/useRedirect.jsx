import { useContext } from "react";
import { RedirectContext } from "../contexts/RedirectContext.jsx";

export const useRedirect = () => {
  const { redirectToGDG, redirectToWhatsApp, redirectToTwitter, redirectToFacebook, redirectToLinkedin, redirectToInsta } = useContext(RedirectContext);

  return { redirectToGDG, redirectToWhatsApp, redirectToTwitter, redirectToFacebook, redirectToLinkedin, redirectToInsta };
};
