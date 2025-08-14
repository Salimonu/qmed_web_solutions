import { Link } from 'react-router';

import Accordion from './Accordion';
import faqs from '../assets/FaqsMentee.json';

function FaqsMentees() {
  return (
    <>
      <h1 className="text-2xl mb-6 font-semibold">
        🚀 Website Development Tutorials for Beginners – Your Questions Answered
      </h1>
      <p className="text-xl leading-10 mb-8">
        Starting your journey in website development❓ <br />
        You’re in the right place. Our Website Development Tutorials for
        Beginners FAQ answers the most common questions new learners have about
        getting started. <br /> From learning{' '}
        <strong>
          {' '}
          HTML and CSS to building responsive websites with JavaScript,{' '}
        </strong>{' '}
        we break down the process step-by-step. Whether you’re learning for{' '}
        <strong>
          personal projects, freelance work, or to start a career in tech,{' '}
        </strong>{' '}
        this guide will help you move forward with confidence.
      </p>

      <Accordion faqs={faqs} />

      <h2 className="text-2xl mt-8 mb-2 font-semibold">
        🎯 Start Your Web Development Journey Today
      </h2>
      <p className="text-xl leading-10 mb-8">
        Don’t let confusion slow you down. With our
        <strong>
          {' '}
          beginner-friendly tutorials, real-world projects, and expert
          mentorship,{' '}
        </strong>{' '}
        you can go{' '}
        <strong>
          {' '}
          from zero to building your first website in weeks.{' '}
        </strong>{' '}
        Enroll now or{' '}
        <Link to="/contact" className="underline hover:text-blue-900">
          Contact us
        </Link>{' '}
        to get started and take the first step toward becoming a web developer.
      </p>
    </>
  );
}

export default FaqsMentees;
