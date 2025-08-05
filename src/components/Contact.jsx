import {
  BsGeoAltFill,
  BsGlobe,
  BsWhatsapp,
  BsTelephoneFill,
  BsFacebook,
  BsEnvelopeAtFill,
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
          className="cta w-300 mx-auto p-10 rounded-2xl shadow-xl shadow-gray-600"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <h3 className="text-3xl font-semibold uppercase mb-10 text-center">
            🚀 Let’s Build Something Great Together
          </h3>
          <div className="grid grid-cols-2">
            <div className="px-10">
              <div className="flex gap-4 items-center mb-8">
                <BsGeoAltFill size={28} />
                <div>
                  <h4 className="font-semibold text-2xl mb-1">ADDRESS</h4>
                  <p>118, Iredapo Quarters, Ile Ife, Osun, Nigeria</p>
                </div>
              </div>
              <div className="flex gap-4 items-center mb-8">
                <BsEnvelopeAtFill size={28} />
                <div>
                  <h4 className="font-semibold text-2xl mb-1">EMAIL</h4>
                  <a
                    href="mailto:salimonuh@gmail.com"
                    target="_blank"
                    className="block hover:text-shadow-gray-100 hover:text-shadow-sm"
                  >
                    salimonuh@gmail.com
                  </a>
                  <a
                    href="https://www.qmedventures.com"
                    target="_blank"
                    className="hover:text-shadow-gray-100 hover:text-shadow-sm"
                  >
                    www.qmedventures.com
                  </a>
                </div>
              </div>
            </div>
            <div className="px-10">
              <div className="flex gap-4 items-center mb-8">
                <BsTelephoneFill size={28} />
                <div>
                  <h4 className="font-semibold text-2xl mb-1">PHONE</h4>
                  <a
                    className="block hover:text-shadow-gray-100 hover:text-shadow-sm"
                    href="tel:+2348101747514"
                  >
                    +2348101747514
                  </a>
                  <a
                    href="tel:+2349076378175"
                    className="hover:text-shadow-gray-100 hover:text-shadow-sm"
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
                    className="hover:text-shadow-gray-100 hover:text-shadow-sm"
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
