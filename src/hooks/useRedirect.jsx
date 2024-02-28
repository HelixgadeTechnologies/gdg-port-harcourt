import { useContext } from "react";
import { RedirectContext } from "../contexts/RedirectContext.jsx";

export const useRedirect = () => {
  const { redirectToGDG, redirectToWhatsApp } = useContext(RedirectContext);

  return { redirectToGDG, redirectToWhatsApp };
};
