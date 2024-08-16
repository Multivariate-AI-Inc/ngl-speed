import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import Link from "next/link";
function BackToTop() {
  const [hasScrolled, setHasScrolled] = useState("false");
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  const onScroll = () => {
    if (window.scrollY > 100 && !hasScrolled) {
      setHasScrolled(true);
    } else if (window.scrollY < 100 && hasScrolled) {
      setHasScrolled(false);
    }
  };

  return (
    <>
      {hasScrolled && (
        <Link
          id="scrollUp"
          href="#top"
          style={{ position: "fixed", zIndex: 2147483647 }}
          aria-label="backtotop"
        >
          <FaArrowUp style={{fontSize:"20px", position:"relative", top:"30%", color:"#ffe7bb"}} />

        </Link>
      )}
    </>
  );
}
export default BackToTop;
