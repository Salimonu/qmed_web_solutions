import { Helmet } from 'react-helmet';

import FaqsBus from '../components/FaqsBus';
import Form from '../components/Form';

function FaqPageBus() {
  return (
    <>
      <Helmet>
        <title>
          Website Development for Businesses – FAQs | Professional Web Design &
          Development
        </title>
        <meta
          name="description"
          content="Get answers to common questions about website development for businesses. Learn about costs, timelines, mobile-friendly design, SEO, e-commerce integration, and maintenance services. Build a website that grows your business."
        />
        <meta
          name="keywords"
          content="website development for businesses, business website design, web development FAQ, professional website design services, mobile-friendly business website, SEO for business websites, website redesign, e-commerce website development, online payment integration, business website maintenance"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Why does my business need a website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A website helps your business reach more customers, build credibility, showcase your products or services, and generate sales 24/7. It’s your digital storefront."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How long does it take to build a website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The timeline depends on your website’s complexity. A basic business website can take 1–3 weeks, while custom and feature-rich websites may take 4–8 weeks or more."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How much does a website cost for my business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Costs vary depending on design, features, and functionality. Basic websites are more affordable, while e-commerce or custom platforms require a bigger budget. We provide transparent quotes before starting."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will my website be mobile-friendly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. All our websites are designed to be responsive, meaning they look great and work perfectly on smartphones, tablets, and desktops."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you redesign my existing business website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. We can refresh your website with a modern look, improved performance, better user experience, and SEO optimization."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer SEO services with website development?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We optimize your website for search engines to help potential customers find your business online faster."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Will I be able to update the website myself after it’s built?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We use tools like HTML, CSS, Javascript, and Django. The Source code will be made available on request allowing you to update content, images, and products with technical skills. We also offer training."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide website maintenance after launch?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer maintenance plans to keep your website secure, updated, and running smoothly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you integrate online payments into my website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We can integrate secure payment gateways like PayPal, Stripe, Flutterwave, and Paystack for your business."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do we get started?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply contact us for a free consultation. We’ll discuss your business needs, create a plan, and start building your website."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="bg-gray-50 py-10 lg:py-12 px-12 lg:px-26">
        <FaqsBus />
        <Form
          heading="Do you have a question not yet answered?"
          text="Write your question here:"
          email="Your email:"
        />
      </div>
    </>
  );
}

export default FaqPageBus;
