// import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import {
  BsSpeedometer2,
  BsTools,
  BsGlobe2,
  BsPeople,
  BsPhone,
} from 'react-icons/bs';

function Services() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="p-16 text-slate-900 services">
        <div className="text-center">
          <h3 className="px-6 py-3  bg-blue-800 text-3xl font-semibold text-white inline-block rounded-xl mb-8">
            My Services
          </h3>
          <p className="text-3xl mb-8 text-blue-950">
            {' '}
            🚀 Let's build something great together.{' '}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-20 gap-x-40">
          <div
            className="p-10 bg-blue-100 rounded-xl shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <BsGlobe2 size={42} className="mb-6 text-blue-800" />
            <h5 className="mb-4 text-xl uppercase font-semibold">
              Website Development
            </h5>
            <p className="mb-4 text-xl">
              I design and build clean and fast websites tailored to your brand
              and business goals that work seamlessly on all devices.
            </p>
          </div>

          <div
            className="p-10 bg-blue-100 rounded-xl shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <BsSpeedometer2 size={42} className="mb-6 text-blue-800" />
            <h5 className="mb-4 text-xl uppercase font-semibold">
              SEO &amp; Speed Optimization
            </h5>
            <p className="mb-4 text-xl">
              I optimize your website to rank higher on Google and attract more
              organic traffic. I ensure your site is search engine–friendly and
              ready to grow.
            </p>
          </div>

          <div
            className="p-10 bg-blue-100 rounded-xl shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <BsTools size={42} className="mb-6 text-blue-800" />
            <h5 className="mb-4 text-xl uppercase font-semibold">
              Website Maintenance
            </h5>
            <p className="mb-4 text-xl">
              Keep your website running smoothly with regular updates, backups,
              and security checks. I handle the tech stuff so you can focus on
              your business
            </p>
          </div>

          <div
            className="p-10 bg-blue-100 rounded-xl shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <BsPeople size={42} className="mb-6 text-blue-800" />
            <h5 className="mb-4 text-xl uppercase font-semibold">Mentorship</h5>
            <p className="mb-4 text-xl">
              I provide hands-on mentorship to aspiring developers, guiding them
              through real-world projects to accelerate their growth.
            </p>
          </div>

          <div
            className="p-10 bg-blue-100 rounded-xl shadow-2xl"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <BsPhone size={42} className="mb-6 text-blue-800" />
            <h5 className="mb-4 text-xl uppercase font-semibold">
              Mobile App Development
            </h5>
            <p className="mb-4 text-xl">
              I build fast, user-friendly mobile apps that solve real problems
              and deliver seamless experiences across Android and iOS platforms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
