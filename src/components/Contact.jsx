import {
  BsGeoAlt,
  BsGlobe,
  BsWhatsapp,
  BsFacebook,
  BsEnvelopeAt,
  BsTelephone,
} from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className=" bg-gray-50  text-slate-200 text-xl p-16">
        <div
          className="cta lg:w-[90vw] mx-auto py-10 px-4 md:px-10 rounded-2xl shadow-xl shadow-gray-600"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h3 className="text-2xl md:text-4xl leading-10 md:leading-12 font-semibold uppercase mb-10 text-center">
            🚀 Let’s Build Something Great Together
          </h3>
          <div role="contact" className="md:grid md:grid-cols-2">
            <div className="px-2 md:px-10">
              <div className="flex gap-4 items-center mb-8">
                <BsGeoAlt size={40} />
                <div>
                  <h4 className="font-semibold text-2xl mb-1">ADDRESS</h4>
                  <p>118, Iredapo Quarters, Ile Ife, Osun, Nigeria</p>
                </div>
              </div>
              <div className="flex gap-4 items-center mb-8">
                <BsEnvelopeAt size={28} />
                <div>
                  <h4 className="font-semibold text-2xl mb-1">EMAIL</h4>
                  <a
                    href="mailto:salimonuh@gmail.com"
                    target="_blank"
                    className="block px-1 bg-slate-200 text-blue-900  hover:font-extrabold"
                  >
                    salimonuh@gmail.com
                  </a>
                  <a
                    href="https://www.qmedventures.com"
                    target="_blank"
                    className="block mt-2 px-1 bg-slate-200 text-blue-900  hover:font-extrabold"
                  >
                    qmedwebsolutions.netlify.app
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2 md:px-10">
              <div className="flex gap-4 items-center mb-8">
                <BsTelephone size={28} />
                <div>
                  <h4 className="font-semibold text-2xl mb-1">PHONE</h4>
                  <a
                    className="block font-semibold px-2 bg-slate-200 text-blue-900  hover:font-extrabold"
                    href="tel:+2348101747514"
                  >
                    +2348101747514
                  </a>
                  <a
                    href="tel:+2349076378175"
                    className="block mt-2 font-semibold px-2 bg-slate-200 text-blue-900  hover:font-extrabold"
                  >
                    +2349076378175
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <BsWhatsapp size={28} />
                <div>
                  <h4 className="font-semibold text-2xl mb-1">WHATSAPP</h4>
                  <a
                    href="https://wa.me/2348101747514?text=Hello%2C%20I'm%20interested%20in%20your%20services"
                    target="_blank"
                    className="block font-semibold px-2 bg-slate-200 text-blue-900  hover:font-extrabold"
                  >
                    +2348101747514
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
