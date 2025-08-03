import aboutImg from '../assets/portfolio/programmer.png';
import { BsLaptopFill } from 'react-icons/bs';

function About() {
  return (
    <div>
      <section className="grid grid-cols-2 p-30 items-center gap-10 bg-blue-50 -translate-y-20">
        <div>
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
            className="inline-block px-6  py-2 bg-blue-800 text-white text-3xl rounded-xl mt-6 hover:scale-110 transition-all duration-1000"
          >
            Let's get started &rarr;
          </a>
        </div>
        <div className="circle">
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
