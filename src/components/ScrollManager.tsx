import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager (){

const  {pathname, hash}  = useLocation();

useEffect(() => {

  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
}, [pathname, hash]);


  return null;
}