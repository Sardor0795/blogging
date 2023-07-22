import { useEffect, useState } from "react";
import { BackToTopButton } from "./style";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow-up.svg";

const ToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      <BackToTopButton onClick={scrollToTop} show={`${showButton}`}>
        <ArrowUp />
      </BackToTopButton>
    </>
  );
};

export default ToTopButton;
