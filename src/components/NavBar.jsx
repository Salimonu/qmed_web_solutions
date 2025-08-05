import qmedLogoSmall from '../assets/portfolio/qmed_logo.jpg';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

function NavBar() {
  return (
    <>
      <div className="grid_nav px-10 py-3 text-2xl bg-blue-50 text-blue-800 font-semibold">
        <a href="#" className="qmed_logo mr-20">
          <img src={qmedLogoSmall} alt="Qmed Logo; portfolio web developer" />
        </a>

        <ul className="flex px-3 ">
          <li className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300">
            <a href="#"> Services</a>
          </li>
          <li className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300">
            <a href="#"> Skills</a>
          </li>
          <li className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300">
            <a href="#"> Projects</a>
          </li>
          <li className="px-5 hover:text-shadow-lg hover:text-shadow-blue-300">
            <a href="#"> About</a>
          </li>
          <li>
            <a
              href="#"
              className="pulse font-semibold py-1 px-2 bg-blue-600 text-white rounded-xl inline-block mr-4 hover:scale-110 duration-1000"
            >
              Hire me
            </a>
          </li>
        </ul>

        <ul className="flex p-5">
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
              href="https://www.linkedin.com/in/hammed-salimonu-6a388322a/"
              target="_blank"
            >
              <BsFacebook className="hover:scale-140 duration-800" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
