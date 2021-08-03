import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();
  const handleClick = () => setIsActive(!isActive);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        setIsActive(!isActive);
      } else {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => window.removeEventListener("click", pageClickEvent);
  }, [isActive]);
  return (
    <nav className="shadow">
      <div className="container px-6 py-3 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="md:text-3xl text-xl font-extrabold">
              Conference
            </Link>
          </div>
          <div className="flex md:hidden">
            <button className="" aria-label="toggle menu" onClick={handleClick}>
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="md:flex">
          <div
            ref={ref}
            className={`${
              isActive
                ? "flex items-center flex-col md:flex-row md:mx-6"
                : "hidden md:block"
            }`}
          >
            <Link to="/" className="my-1 mx-4 md:my-0">
              Home
            </Link>
            <Link to="/location" className="my-1 mx-4 md:my-0">
              Location
            </Link>
            <Link to="/food-info" className="my-1 mx-4 md:my-0">
              Food Info
            </Link>
            <Link to="/conduct" className="my-1 mx-4 md:my-0">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
