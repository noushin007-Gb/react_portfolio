import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="/img/N_logo.png" alt="noushin" width="77" height="77" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>

      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <Link
              to="heroSection"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              onClick={closeMenu}
              activeClass="navbar--active-content"
              className="navbar--content"
              href="#heroSection"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="MyPortfolio"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              onClick={closeMenu}
              activeClass="navbar--active-content"
              className="navbar--content"
              href="#MyPortfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="AboutMe"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              onClick={closeMenu}
              activeClass="navbar--active-content"
              className="navbar--content"
              href="#AboutMe"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="testimonial"
              smooth={true}
              offset={-70}
              duration={500}
              spy={true}
              onClick={closeMenu}
              activeClass="navbar--active-content"
              className="navbar--content"
              href="#testimonial"
            >
              Testimonials
            </Link>
          </li>
        </ul>
      </div>
      <Link
        to="Contact"
        smooth={true}
        offset={-70}
        duration={500}
        spy={true}
        onClick={closeMenu}
        activeClass="navbar--active-content"
        className="btn btn-outline-primary"
        href="#Contact"
      >
        Contact Me
      </Link>
    </nav>
  );
}

export default Navbar;
