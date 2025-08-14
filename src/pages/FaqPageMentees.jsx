import { Helmet } from 'react-helmet';

import FaqsMentees from '../components/FaqsMentees';
import Form from '../components/Form';

function FaqPageMentees() {
  return (
    <>
      <Helmet>
        <title>
          Website Development Tutorials for Beginners – FAQs & Learning Guide
        </title>
        <meta
          name="description"
          content="Find answers to common questions about learning website development for beginners. Learn HTML, CSS, JavaScript, Django and more with step-by-step tutorials, real projects, and expert guidance."
        />
        <meta
          name="keywords"
          content="website development tutorials for beginners, learn web development, beginner web design course, HTML CSS JavaScript tutorials,responsive web design tutorial, website building for beginners, web development FAQ, learn to build a website"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who can join your website development tutorials?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our tutorials are designed for beginners, intermediate learners, and business owners who want to build or manage their own websites. No prior coding experience is required for beginner lessons."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What topics do you cover in the tutorials?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We cover HTML, CSS, JavaScript, Responsive Web Design, E-commerce Website Development, SEO basics, and backend development using frameworks like Django or Node.js."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are the tutorials beginner-friendly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We start from the basics and gradually introduce more advanced concepts with step-by-step guidance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide live classes or recorded lessons?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer both. You can attend live interactive sessions or watch recorded lessons at your own pace."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to learn website development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on your learning pace and the depth of skills you want. Many students can build their first website in 4–6 weeks of consistent learning."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to install any software before starting?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We’ll guide you through setting up free and beginner-friendly tools like Visual Studio Code, browsers, and hosting platforms before starting."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will I work on real projects?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. You’ll complete hands-on projects such as personal portfolios, business websites, and e-commerce stores to gain practical skills."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you give certificates after completion?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We provide a certificate of completion to showcase your new skills to employers or clients."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer one-on-one mentorship?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We have personalized mentorship packages for learners who want dedicated guidance."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I enroll in your tutorials?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply register through our website’s enrollment form or contact us directly to secure your slot."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="bg-gray-50 py-10 lg:py-12 px-12 lg:px-26">
        <FaqsMentees />
        <Form
          heading="Do you have a question not yet answered?"
          text="Write your question here:"
          email="Your email:"
        />
      </div>
    </>
  );
}

export default FaqPageMentees;
