import qmedLogoSmall from '../assets/portfolio/qmed_logo.jpg';
import { BsLinkedin, BsGithub, BsFacebook, BsList } from 'react-icons/bs';
import { NavLink } from 'react-router';

function NavBar({ onOpen }) {
  return (
    <>
      <div className="sticky z-40 top-0 grid_nav px-10 py-3 text-2xl bg-blue-50 text-blue-800 font-semibold">
        <span className="qmed_logo xl:mr-20">
          <NavLink to="/">
            <img src={qmedLogoSmall} alt="Qmed Logo; portfolio web developer" />
          </NavLink>
        </span>

        <ul className="hidden xl:flex px-3 ">
          <li className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300">
            <a href="/#Skills"> Skills</a>
          </li>
          <li className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300 mr-4">
            <a href="/#About"> About</a>
          </li>
          <li>
            <a
              href="#"
              className="pulse font-semibold py-1 px-2 bg-blue-600 text-white rounded-xl inline-block mr-4 hover:scale-110 duration-1000"
            >
              <NavLink to="/contact">Hire me</NavLink>
            </a>
          </li>
        </ul>

        <ul className="flex sm:gap-10 xl:gap-0 p-5">
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

        <div className="xl:hidden">
          <BsList
            onClick={onOpen}
            className="pointer text-4xl hover:scale-140 duration-800"
          />
        </div>
      </div>
    </>
  );
}

export default NavBar;
