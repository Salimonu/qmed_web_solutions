import { useState } from 'react';

function Form({ heading, text, email }) {
  const [formState, setFormState] = useState({
    message: '',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('form-name', 'inquiries');
    Object.keys(formState).forEach(key => {
      formData.append(key, formState[key]);
    });

    fetch('/', {
      method: 'POST',
      body: 'formData',
    })
      .then(() => setSubmitted(true))
      .catch(error => alert(error));

    if (submitted) {
      return (
        <div className="bg-blue-100 text-center p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-blue-700">
            ✅ Thank you! Your message has been sent.
          </h2>
        </div>
      );
    }
  };

  return (
    <>
      <div className="bg-blue-100 text-gray-900 lg:w-[40vw] mx-auto mt-10 py-10 px-4 md:px-10 rounded-2xl shadow-xl shadow-gray-600">
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
            className="text-xl mt-4 bg-blue-600 pointer p-2 uppercase rounded w-[100%] text-slate-200  hover:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
