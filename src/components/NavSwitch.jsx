import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BottomNavbar from "./ButtomNavbar";

function NavSwitch() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <BottomNavbar /> : <Navbar />}
    </>
  );
}

export default NavSwitch;