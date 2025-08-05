import omnifood from '../assets/portfolio/omnifood-phone.jpg';
import natours from '../assets/portfolio/natours-phone.jpg';
import tribook from '../assets/portfolio/tribookPhone.jpg';
import edutrack from '../assets/portfolio/edutrack.jpg';

function Project() {
  return (
    <>
      <div className="services p-16 ">
        <div className="text-center">
          <h3 className="px-6 py-3  bg-blue-800 text-3xl font-semibold text-white inline-block rounded-xl mb-8">
            My Recent Work
          </h3>
          <p className="text-2xl mb-8 text-blue-950">
            {' '}
            Here are a few past web projects I've worked on.{' '}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-y-20 gap-x-40">
          <div className="p-10 bg-blue-100 rounded-xl shadow-2xl grid grid-cols-[100px_1fr] gap-10 items-center">
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
                >
                  View Live Project
                </a>
              </p>
            </div>
          </div>

          <div className="p-10 bg-blue-100 rounded-xl shadow-2xl grid grid-cols-[100px_1fr] gap-10 items-center">
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
                >
                  View Live Project
                </a>
              </p>
            </div>
          </div>

          <div className="p-10 bg-blue-100 rounded-xl shadow-2xl grid grid-cols-[100px_1fr] gap-10 items-center">
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
                >
                  View Live Project
                </a>
              </p>
            </div>
          </div>

          <div className="p-10 bg-blue-100 rounded-xl shadow-2xl grid grid-cols-[100px_1fr] gap-10 items-center">
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
