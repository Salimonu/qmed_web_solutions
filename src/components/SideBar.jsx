import { useEffect, useRef } from 'react';
import qmedLogoSmall from '../assets/portfolio/qmed_logo.jpg';
import { NavLink } from 'react-router';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

function SideBar({ isOpen, closeSideBar }) {
  const sidebarRef = useRef(null);

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
          <li onClick={closeSideBar}>
            <a
              href="#"
              className="pulse font-semibold py-1 px-2 bg-blue-600 text-white rounded-xl inline-block mr-4 hover:scale-110 duration-1000"
            >
              <NavLink to="/contact">Let's Talk</NavLink>
            </a>
          </li>
        </ul>

        <ul className="flex gap-10 p-5 mt-30">
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
