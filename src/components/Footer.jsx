import qmedLogoSmall from '../assets/portfolio/qmed_logo.jpg';
import { NavLink } from 'react-router';

function Footer() {
  return (
    <>
      <div className="bg-blue-100 text-slate-900 p-16">
        <div className="flex justify-center">
          {' '}
          <a href="/">
            <img
              src={qmedLogoSmall}
              alt="Brand Logo"
              className="footer-logo mb-18"
            />
          </a>
        </div>
        <div className="md:grid md:grid-cols-2 gap-20">
          <nav>
            <ul className="flex mb-16 py-2 text-xl border-t-1 justify-between">
              <li className="hover:scale-120 inline-block duration-700">
                {' '}
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <a
                  href="/#Skills"
                  className="hover:scale-120 inline-block duration-700"
                >
                  {' '}
                  Skills
                </a>
              </li>
              <li className="hover:scale-120 inline-block duration-700">
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <a
                  href="/#About"
                  className="hover:scale-120 inline-block duration-700"
                >
                  {' '}
                  About{' '}
                </a>
              </li>
            </ul>
          </nav>
          <p className="py-2 text-xl border-t-1">
            Copyright &copy; Designed by{' '}
            <a
              href="mailto:salimonuh@gmail.com"
              target="_blank"
              className="underline hover:font-semibold duration-1000"
            >
              Qmed Web Solutions
            </a>{' '}
            @ 2025. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
