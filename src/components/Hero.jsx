import { BsLaptopFill } from 'react-icons/bs';

function Hero() {
  return (
    <section className="hero text-white z-10">
      <div className="absolute top-20 left-80">
        <p className="flex items-center">
          <BsLaptopFill color="white" size={32} />
          <span className="text-4xl ml-2">Hello, I'm Hammed</span>
        </p>
        <h1 className="text-6xl font-semibold mb-10 mt-4">
          Full Stack Web Developer|
          <br /> Javascript & Django Expert
        </h1>

        <a
          href="#"
          className="py-1 px-2 bg-blue-50 text-blue-900 text-3xl rounded-xl inline-block mr-4 hover:scale-115 transition-all duration-1000"
        >
          HIRE ME
        </a>
        <a
          href="#"
          type="button"
          className="text-2xl py-1 px-2 outline-1 outline-white rounded-xl inline-block mr-4 hover:scale-115 transition-all duration-1000"
        >
          VIEW MY WORK &darr;
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
