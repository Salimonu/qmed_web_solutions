import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import omnifood from '../assets/portfolio/omnifood-phone.jpg';
import natours from '../assets/portfolio/natours-phone.jpg';
import tribook from '../assets/portfolio/tribookPhone.jpg';
import edutrack from '../assets/portfolio/edutrack.jpg';

function Project() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="services p-16 ">
        <div className="text-center">
          <h3 className="px-6 py-3  bg-blue-800 text-3xl font-semibold text-white inline-block rounded-xl mb-8">
            My Recent Work
          </h3>
          <p className="text-3xl mb-14 text-blue-950">
            {' '}
            Here are a few past web projects I've worked on.{' '}
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 gap-y-20 gap-x-30">
          <div
            className="mb-20 lg:mb-0 p-10 bg-blue-100 rounded-xl shadow-2xl grid grid-cols-[100px_1fr] gap-10 items-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img src={omnifood} alt="Omnifood project" className="w-50" />
            <div className="text-xl">
              <h4 className="text-2xl font-semibold mb-6 text-blue-950">
                💻 Omnifood Web App
              </h4>
              <p className="mb-4">⚒️ HTML, CSS, JavaScript</p>
              <p>
                {' '}
                🌐
                <a
                  href="https://healthymeal25.netlify.app/"
                  className="ml-2 hover:underline text-blue-950"
                  target="_blank"
                >
                  View Live Project
                </a>
              </p>
            </div>
          </div>

          <div
            className="mb-20 lg:mb-0 p-10 bg-blue-100 rounded-xl shadow-2xl grid grid-cols-[100px_1fr] gap-10 items-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img src={natours} alt="Omnifood project" className="w-50" />
            <div className="text-xl">
              <h4 className="text-2xl font-semibold mb-6 text-blue-950">
                💻 Natours Web App
              </h4>
              <p className="mb-4">⚒️ HTML, CSS, Sass, JavaScript</p>
              <p>
                {' '}
                🌐
                <a
                  href="https://natours25.netlify.app/"
                  className="ml-2 hover:underline text-blue-950"
                  target="_blank"
                >
                  View Live Project
                </a>
              </p>
            </div>
          </div>

          <div
            className="mb-20 lg:mb-0 p-10 bg-blue-100 rounded-xl shadow-2xl grid grid-cols-[100px_1fr] gap-10 items-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img src={tribook} alt="Omnifood project" className="w-50" />
            <div className="text-xl">
              <h4 className="text-2xl font-semibold mb-6 text-blue-950">
                💻 Tribook Web App
              </h4>
              <p className="mb-4">⚒️ HTML, CSS, JavaScript</p>
              <p>
                {' '}
                🌐
                <a
                  href="https://salimonu.github.io/tribook/"
                  className="ml-2 hover:underline text-blue-950"
                  target="_blank"
                >
                  View Live Project
                </a>
              </p>
            </div>
          </div>

          <div
            className="mb-20 lg:mb-0 p-10 bg-blue-100 rounded-xl shadow-2xl grid grid-cols-[100px_1fr] gap-10 items-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img src={edutrack} alt="Omnifood project" className="w-50" />
            <div className="text-xl">
              <h4 className="text-2xl font-semibold mb-6 text-blue-950">
                💻 Edutrack Web App
              </h4>
              <p className="mb-4">⚒️ HTML, CSS, Python, Django </p>
              <p>
                {' '}
                🌐
                <a
                  href="https://edutrack-69bn.onrender.com/"
                  className="ml-2 hover:underline text-blue-950"
                  target="_blank"
                >
                  View Live Project
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
