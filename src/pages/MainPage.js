import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useMemo } from "react";

import {
    faInstagram,
    faLinkedin,
    faMedium,
} from "@fortawesome/free-brands-svg-icons";
import Lottie from "lottie-web";
import About from "../components/About";
import Blog from "../components/Blog";
import Board from "../components/Board";
import ContactSection from "../components/ContactSection";
import Domains from "../components/Domains";
import Events from "../components/Events";
import Faculty from "../components/Faculty";
import Footer from "../components/Footer";
import Memories from "../components/Memories";
import "../CSS/MainPage.css";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [changingText, setChangingText] = useState("");
  const words = useMemo(() => ["INNOVATIVE", "CONNECTED", "EMPOWERING"], []);
  const typingSpeed = 150;
  const wordPause = 1000;

  useEffect(() => {
    let wordIndex = 0;
    let letterIndex = 0;
    let isTyping = true;

    const typeLetters = () => {
      if (isTyping) {
        setChangingText((prev) =>
          words[wordIndex].substring(0, letterIndex + 1)
        );
        letterIndex++;

        if (letterIndex === words[wordIndex].length) {
          isTyping = false;
          setTimeout(() => typeLetters(), wordPause);
        } else {
          setTimeout(typeLetters, typingSpeed);
        }
      } else {
        letterIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        isTyping = true;
        typeLetters();
      }
    };

    typeLetters();
    return () => {};
  }, [words]);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: document.getElementById("bgimg"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://lottie.host/126e9712-f452-456d-bf46-2617f37a6d55/uMTfCwBKPJ.json",
    });

    return () => {
      animation.destroy();
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <section id="Home" style={{ background: "black" }}>
        <div id="homebg">
          <div
            style={{
              width: "210vh",
            }}
            id="bgimg"
          ></div>{" "}
        </div>
        <style>
          {`
      @media screen and (max-width: 600px) {
        #bgimg {
          width: 180vh; 
          position: relative;
          right : 650px;

        }
      }
    `}
        </style>
        <div id="homecontent">
          <a href="/" style={{ textDecoration: "none" }}>
            <div id="htitle">IEEE TEMS</div>
          </a>
          <p id="hchanging">{changingText}</p>

          <div id="hlogo">
            <a
              href="https://vit.ac.in/"
              target="_blank" rel="noopener noreferrer"
            >
              <img
                src="/VIT Logo.webp"
                alt="VIT Logo"
              
              />
            </a>
          </div>
          <div id="htext">
            <a
              href="https://vit.ac.in/campuslife/studentswelfare"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noopener noreferrer"
            >
              <p className="text-center">Office of Students' Welfare</p>
            </a>
          </div>
          <div id="hicons">
            <a
              href="https://ieee-tems-blogs.medium.com/"
              target="_blank" rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faMedium} className="hicon" />
            </a>
            <a
              href="https://www.instagram.com/ieeetemsvit/"
              target="_blank" rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} className="hicon" />
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-tems/about/"
              target="_blank" rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} className="hicon" />
            </a>
          </div>
        </div>

        <div
          className="hmenu"
          id="menuIcon"
          onClick={toggleMenu}
          style={{
            fontSize: "25px",
            cursor: "pointer",
            marginTop: "0px",
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        {menuOpen && (
          <div
            className="side-menu"
            id="sideMenu"
            style={{
              position: "fixed",
              top: "0",
              right: menuOpen ? "0" : "-100%",
              width: "320px",
              height: "100%",
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(8px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: "10",
              transition: "right 0.3s ease-in-out",
              paddingTop: "50px",
              overflowY: "auto",
            }}
          >
            <nav className="sidebar" style={{ width: "100%" }}>
              <a
                href="#Home"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Home
              </a>
              <a
                href="#About"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                About Us
              </a>
              <a
                href="#Domains"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Domains
              </a>
              <a
                href="#Event"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Events
              </a>
              <a
                href="#blog-section"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Our Blogs
              </a>
              <a
                href="#Board"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Board
              </a>
              <a
                href="#memories"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Memories
              </a>
              <a
                href="#Contact"
                className="menu-elt"
                style={menuItemStyle}
                onClick={closeMenu}
              >
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </section>

      <About />
      <Domains />
      <Events />
      <Blog />
      <Board />
      <Faculty />
      <Memories />
      <ContactSection />
      <Footer />
    </div>
  );
};

const menuItemStyle = {
  display: "block",
  padding: "20px",
  textDecoration: "none",
  fontFamily: "'Noto Sans TC', sans-serif",
  fontSize: "22px",
  fontWeight: "550",
  textAlign: "center",
  transition: "background-color 0.3s ease",
  borderBottom: "2px solid white",
};

export default HomePage;
