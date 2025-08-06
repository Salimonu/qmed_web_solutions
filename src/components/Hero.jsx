import { BsHouseHeartFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router';

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="hero text-white z-10">
      <div className="absolute top-20 left-20 md:left-50">
        <p
          className="flex items-center"
          data-aos="fade-up-left"
          data-aos-duration="1200"
        >
          <BsHouseHeartFill color="white" size={40} />
          <span className="text-4xl ml-2"> Welcome, I'm Hammed</span>
        </p>
        <h1
          className="text-6xl font-semibold mb-18 md:mb-10 mt-4"
          data-aos="fade-up-left"
          data-aos-duration="1200"
        >
          Full Stack Web Developer|
          <br /> Javascript & Django Expert
        </h1>

        <a
          href="#"
          className="pulse uppercase font-semibold py-1 px-2 bg-blue-50 text-blue-900 text-3xl rounded-xl inline-block mr-4 hover:scale-110 duration-1000"
        >
          <Link to="/contact">Hire me</Link>
        </a>
        <a
          href="#"
          type="button"
          className="uppercase font-semibold text-2xl py-1 px-2 outline-1 outline-white rounded-xl inline-block mr-4 hover:scale-110 duration-1000"
        >
          <Link to="/projects">View My Work &darr;</Link>
        </a>
      </div>
    </section>
  );
}

export default Hero;

{
  /* 
          <p>
          A Frontend & Django Developer <br />I build Beautiful & Functional
          Websites to promote businesses online.
        </p>*/
}
