import { Link } from 'react-router';

import Accordion from './Accordion';
import faqs from '../assets/FaqsBus.json';

// const faq = JSON.parse(faqs);
function FaqsBus() {
  return (
    <>
      <h1 className="text-2xl mb-6 font-semibold">
        🌏 Website Development for Businesses – Your Questions Answered
      </h1>
      <p className="text-xl leading-10 mb-8">
        Looking to grow your business online but not sure where to start❓{' '}
        <br />
        Our Website Development for Businesses FAQ section has you covered.
        Whether you’re curious about{' '}
        <strong>
          {' '}
          costs, timelines, mobile-friendly designs, SEO optimization, or
          e-commerce features,{' '}
        </strong>{' '}
        we’ve answered the most common questions to help you make the right
        decision. <br /> Explore our expert insights and learn how a
        professional website can{' '}
        <strong>
          {' '}
          attract customers, boost sales, and strengthen your brand presence.
        </strong>
      </p>

      <Accordion faqs={faqs} />

      <h2 className="text-2xl mt-8 mb-2 font-semibold">
        🚀 Ready to Take Your Business Online?{' '}
      </h2>

      <p className="text-xl leading-10 mb-8">
        Don’t let unanswered questions hold you back from growing your brand.{' '}
        <br />
        Our expert team is here to design and develop{' '}
        <strong>
          {' '}
          a website that’s fast, responsive, and tailored to your business
          needs.
        </strong>{' '}
        Whether you’re starting from scratch or upgrading your current site,
        we’ll bring your vision to life.{' '}
        <Link to="/contact" className="underline hover:text-blue-900">
          Contact us
        </Link>{' '}
        today to get <strong> a free consultation </strong> and see how we can
        help your business thrive online.
      </p>
    </>
  );
}

export default FaqsBus;
