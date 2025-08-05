import qmedLogoSmall from '../assets/portfolio/qmed_logo.jpg';

function Footer() {
  return (
    <>
      <div className="bg-blue-100 text-slate-900 p-16">
        <div className="flex justify-center">
          <img
            src={qmedLogoSmall}
            alt="Brand Logo"
            className="footer-logo mb-14"
          />
        </div>
        <div className="grid grid-cols-2 gap-20">
          <nav>
            <ul className="flex  py-2 text-xl border-t-2 justify-between">
              <li>
                <a
                  href="#"
                  className="hover:scale-120 inline-block duration-700"
                >
                  {' '}
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:scale-120 inline-block duration-700"
                >
                  {' '}
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:scale-120 inline-block duration-700"
                >
                  {' '}
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:scale-120 inline-block duration-700"
                >
                  {' '}
                  Testimonials
                </a>
              </li>
            </ul>
          </nav>
          <p className="py-2 text-xl border-t-2">
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
