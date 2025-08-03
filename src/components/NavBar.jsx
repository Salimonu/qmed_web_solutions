import qmedLogoSmall from '../assets/portfolio/qmed-logo-small.webp';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';

function NavBar() {
  return (
    <>
      <div className="grid_nav p-3 text-2xl bg-blue-50 text-blue-800 font-semibold">
        <a href="#" className="qmed_logo mr-20">
          <img src={qmedLogoSmall} alt="Qmed Logo; portfolio web developer" />
        </a>

        <ul className="flex px-3">
          <li className="px-5">Services</li>
          <li className="px-5">Skills</li>
          <li className="px-5">Projects</li>
          <li className="px-5">Testimonials</li>
          <li className="px-5">Hire me</li>
        </ul>

        <ul className="flex p-5">
          <li className="px-3">
            <a href="https://github.com/Salimonu" target="_blank">
              <BsGithub />
            </a>
          </li>
          <li className="px-3">
            <a
              href="https://www.linkedin.com/in/hammed-salimonu-6a388322a/"
              target="_blank"
            >
              <BsLinkedin />
            </a>
          </li>
          <li className="px-3">
            <a
              href="https://www.linkedin.com/in/hammed-salimonu-6a388322a/"
              target="_blank"
            >
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
