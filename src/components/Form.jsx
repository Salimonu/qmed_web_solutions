import { useState } from 'react';

function Form({ heading, text, email }) {
  const [formState, setFormState] = useState({
    message: '',
    email: '',
  });

  // const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('idle');
  // idle, loading, success, error

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData();
    formData.append('form-name', 'inquiries');
    Object.keys(formState).forEach(key => {
      formData.append(key, formState[key]);
    });

    try {
      await fetch('/', {
        method: 'POST',
        body: formData,
      });

      // setSubmitted(true)
      setStatus('success');
    } catch (error) {
      alert(error);
      setStatus('error');
    }
  };

  return (
    <>
      <div className="bg-blue-100 text-gray-900 lg:w-[40vw] mx-auto mt-10 py-10 px-4 md:px-10 rounded-2xl shadow-xl shadow-gray-600">
        {status === 'success' ? (
          <div className="bg-blue-100 text-center p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-blue-700">
              ✅ Thank you! Your message has been sent.
            </h2>
          </div>
        ) : (
          <form name="inquiries" data-netlify="true" onSubmit={handleSubmit}>
            {/* hidden field for netlify */}
            <input type="hidden" name="form-name" value="inquiries" />

            <h4 className="text-2xl md:text-3xl leading-10 text-blue-900 mb-6 text-center">
              ⁉️ {heading}
            </h4>

            <div>
              <label htmlFor="text" className="block mb-2 text-2xl">
                {text}
              </label>
              <textarea
                name="message"
                id="text"
                value={formState.message}
                onChange={handleChange}
                className="text-xl border-1 bg-slate-100 w-[100%] h-60 rounded"
              ></textarea>
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 mt-4 text-2xl">
                {email}
              </label>
              <input
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                type="email"
                className="border-1 bg-slate-100 w-[100%] h-10 rounded"
              />
            </div>

            <button
              type="submit"
              className={`${
                status === 'loading'
                  ? 'bg-gray-400 cursor-progress'
                  : 'bg-blue-600  hover:bg-blue-800'
              } font-semibold text-xl mt-4 pointer p-2 uppercase rounded w-[100%] text-slate-50`}
              disabled={status === 'loading'}
            >
              {' '}
              {status === 'loading' && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              )}
              {status === 'loading' ? 'Loading...' : 'Submit'}
            </button>
            {status === 'error' && (
              <p className="text-red-600 mt-3">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </>
  );
}

export default Form;
