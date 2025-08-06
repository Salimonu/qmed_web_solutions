import html from '../assets/portfolio/HTML.png';
import css from '../assets/portfolio/CSS.png';
import bootstrap from '../assets/portfolio/BOOTSTRAP.png';
import tailwind from '../assets/portfolio/tailwind.png';
import sass from '../assets/portfolio/sass.png';
import javascript from '../assets/portfolio/JAVASCRIPT.png';
import react from '../assets/portfolio/react.png';
import python from '../assets/portfolio/python.jpg';
import django from '../assets/portfolio/django.png';
import postgreSQL from '../assets/portfolio/postgreSQL.png';
import git from '../assets/portfolio/git.png';

function TechStack() {
  return (
    <div>
      <section className="p-6 -mt-20 bg-gray-50 text-center" id="Skills">
        <h3 className="px-6 py-3 mb-10  bg-blue-800 text-3xl font-semibold text-white inline-block rounded-xl">
          Tech Stack
        </h3>
        <div className="slider">
          <div className="thumbnails h-24">
            <img src={html} alt="HTML logo" />
            <img src={css} alt="CSS logo" />
            <img src={sass} alt="SASS logo" />
            <img src={bootstrap} alt="BOOTSTRAP logo" />
            <img src={tailwind} alt="Tailwind logo" />
            <img src={javascript} alt="JAVASCRIPT logo" />
            <img src={react} alt="REACT logo" />
            <img src={python} alt="PYTHON logo" />
            <img src={django} alt="DJANGO logo" />
            <img src={git} alt="GIT logo" />
            <img src={postgreSQL} alt="postgreSQL logo" />

            {/* Duplicated set */}
            <img src={html} alt="HTML logo" />
            <img src={css} alt="CSS logo" />
            <img src={sass} alt="SASS logo" />
            <img src={bootstrap} alt="BOOTSTRAP logo" />
            <img src={tailwind} alt="Tailwind logo" />
            <img src={javascript} alt="JAVASCRIPT logo" />
            <img src={react} alt="REACT logo" />
            <img src={python} alt="PYTHON logo" />
            <img src={django} alt="DJANGO logo" />
            <img src={git} alt="GIT logo" />
            <img src={postgreSQL} alt="postgreSQL logo" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default TechStack;
