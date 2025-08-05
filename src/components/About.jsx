import aboutImg from '../assets/portfolio/programmer.png';
import { BsLaptopFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router';

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <section
        className="grid grid-cols-2 p-30 items-center gap-10 bg-blue-50 -translate-y-20"
        id="About"
      >
        <div data-aos="fade-up" data-aos-duration="1200">
          {' '}
          <p className="text-2xl text-gray-600">
            <span className="text-3xl mb-4 block font-semibold text-blue-800">
              <BsLaptopFill color="blue" size={60} />
              Crafting Clean Code & Smart Solutions
            </span>
            I help small businesses and startups grow online by building
            <strong> fast, responsive, and user-friendly</strong> websites.
            Let’s turn your ideas into impactful digital products.
          </p>
          <a
            href="#"
            className="pulse inline-block px-6  py-2 bg-blue-800 text-white text-3xl rounded-xl mt-6 hover:scale-110 transition-all duration-1000"
          >
            <Link to="/contact">Let's get started &rarr;</Link>
          </a>
        </div>
        <div className="circle" data-aos="fade-up" data-aos-duration="1200">
          <img
            className="translate-y-40"
            src={aboutImg}
            alt="illustration of a developer at work"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
