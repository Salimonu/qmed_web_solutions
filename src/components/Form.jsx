function Form({ heading, text, email }) {
  return (
    <>
      <div className="bg-blue-100 text-gray-900 lg:w-[40vw] mx-auto mt-10 py-10 px-4 md:px-10 rounded-2xl shadow-xl shadow-gray-600">
        <form name="inquiries" netlify>
          <h4 className="text-2xl md:text-3xl leading-10 text-blue-900 mb-6 text-center">
            ⁉️ {heading}
          </h4>

          <div>
            <label htmlFor="text" className="block mb-2 text-2xl">
              {text}
            </label>
            <textarea
              name=""
              id="text"
              className="text-xl border-1 bg-slate-100 w-[100%] h-60 rounded"
            ></textarea>
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 mt-4 text-2xl">
              {email}
            </label>
            <input
              type="email"
              className="border-1 bg-slate-100 w-[100%] h-10 rounded"
            />
          </div>

          <button className="text-xl mt-4 bg-blue-600 pointer p-2 uppercase rounded w-[100%] text-slate-200  hover:bg-blue-800">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
