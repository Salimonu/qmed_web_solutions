import qmedLogoSmall from '../assets/portfolio/qmed_logo.jpg';
import { NavLink } from 'react-router';

function SideBar({ setIsOpen }) {
  const closeSideBar = () => setIsOpen(false);

  return (
    <div className="fixed z-50 top-0 h-screen w-[70vw] py-3 text-xl bg-blue-50/90 text-blue-800 font-semibold">
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
            <NavLink to="/contact">Hire me</NavLink>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
