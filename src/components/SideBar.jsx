import { useEffect, useRef, useCallback, useState } from 'react';
import qmedLogoSmall from '../assets/portfolio/qmed_logo.jpg';
import { NavLink } from 'react-router';
import {
  BsLinkedin,
  BsGithub,
  BsFacebook,
  BsChevronDown,
  BsChevronUp,
} from 'react-icons/bs';

function SideBar({ isOpen, closeSideBar }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const sidebarRef = useRef(null);
  const dropDownRef = useRef(null);

  const handleToggleDropDown = useCallback(() => {
    setDropDownOpen(prev => !prev);
  }, []);

  const handleCloseDropDown = useCallback(() => {
    setDropDownOpen(false);
  }, []);

  useEffect(() => {
    function handleCloseSideBar(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeSideBar();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleCloseSideBar);
      document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = 'auto';
    return () => {
      document.removeEventListener('mousedown', handleCloseSideBar);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, closeSideBar]);

  useEffect(() => {
    function handleDocumentClick(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        handleCloseDropDown();
      }
    }

    function handleEscapeClick(event) {
      if (event.key === 'Escape') {
        handleCloseDropDown();
      }
    }

    if (dropDownOpen) {
      document.addEventListener('mousedown', handleDocumentClick);
      document.addEventListener('keydown', handleEscapeClick);

      // document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
      document.removeEventListener('keydown', handleEscapeClick);
      // document.body.style.overflow = 'auto';
    };
  }, [dropDownOpen, handleCloseDropDown]);

  return (
    <>
      <div className="overlay"></div>
      <div
        ref={sidebarRef}
        className="sidebar fixed z-50 top-0 h-screen w-[70vw] py-3 text-xl bg-blue-50/90 text-blue-800 font-semibold"
      >
        <div className="qmed_logo ml-8 mt-8">
          <NavLink to="/">
            <img
              onClick={closeSideBar}
              src={qmedLogoSmall}
              alt="Qmed Logo; portfolio web developer"
            />
          </NavLink>
        </div>

        <ul className="flex flex-col p-10 gap-8">
          <li
            onClick={closeSideBar}
            className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300"
          >
            <NavLink to="/">Home</NavLink>
          </li>
          <li
            onClick={closeSideBar}
            className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300"
          >
            <NavLink to="/services">Services</NavLink>
          </li>
          <li
            onClick={closeSideBar}
            className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300"
          >
            <a href="/#Skills"> Skills</a>
          </li>
          <li
            onClick={closeSideBar}
            className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300"
          >
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li
            onClick={closeSideBar}
            className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300 mr-4"
          >
            <a href="/#About"> About</a>
          </li>

          <li
            ref={dropDownRef}
            onMouseEnter={() => setDropDownOpen(true)}
            onMouseLeave={() => setDropDownOpen(false)}
            className="relative px-5 mr-4"
          >
            <div>
              <button
                onClick={handleToggleDropDown}
                className="flex items-center gap-1 mb-2 cursor-pointer"
              >
                <span className="hover:text-shadow-lg hover:text-shadow-blue-300">
                  FAQs
                </span>
                {dropDownOpen ? <BsChevronUp /> : <BsChevronDown />}
              </button>

              {dropDownOpen && (
                <ul className="text-lg absolute left-0 w-100 bg-gray-200 p-4 rounded z-10">
                  <li
                    onClick={closeSideBar}
                    className="mb-2 hover:text-shadow-lg hover:text-shadow-blue-300"
                  >
                    <NavLink to="/faqs">
                      🌏 Website Development for Businesses
                    </NavLink>
                  </li>
                  <li
                    onClick={closeSideBar}
                    className="hover:text-shadow-lg hover:text-shadow-blue-300"
                  >
                    <NavLink to="/faqstutorial">
                      📘 Tutorial on Website Development
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </li>

          <li onClick={closeSideBar}>
            <span className="pulse font-semibold py-1 px-2 bg-blue-600 text-white rounded-xl inline-block mr-4 hover:scale-110 duration-1000">
              <NavLink to="/contact">Let's Talk</NavLink>
            </span>
          </li>
        </ul>

        <ul className="flex gap-10 p-5 mt-28">
          <li className="px-3">
            <a href="https://github.com/Salimonu" target="_blank">
              <BsGithub className="hover:scale-140 duration-800" />
            </a>
          </li>
          <li className="px-3">
            <a
              href="https://www.linkedin.com/in/hammed-salimonu-6a388322a/"
              target="_blank"
            >
              <BsLinkedin className="hover:scale-140 duration-800" />
            </a>
          </li>
          <li className="px-3">
            <a
              href="https://web.facebook.com/groups/690122060421829"
              target="_blank"
            >
              <BsFacebook className="hover:scale-140 duration-800" />
            </a>
          </li>
        </ul>

        <p className="mx-8 py-2 text-xl border-t-1">
          &copy; 2025.{' '}
          <a
            href="mailto:salimonuh@gmail.com"
            target="_blank"
            className="underline hover:font-semibold duration-1000"
          >
            Qmed Web Solutions.
          </a>{' '}
          All rights reserved.
        </p>
      </div>
    </>
  );
}

export default SideBar;
