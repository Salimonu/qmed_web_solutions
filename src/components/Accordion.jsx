import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

function Accordion({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          index={index}
          title={faq.question}
        >
          {faq.answer}
        </AccordionItem>
      ))}
    </>
  );
}

function AccordionItem({
  index,
  activeIndex,
  setActiveIndex,
  title,
  children,
}) {
  const itemOpen = index === activeIndex;

  // function handleToggle() {
  //   setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  // }

  function handleToggle() {
    setActiveIndex(itemOpen ? null : index);
  }

  return (
    <>
      <div
        className={`${
          itemOpen && 'border-blue-900'
        } w-[80vw] lg:w-180 border-y-1 border-x-2 px-2 mt-2`}
      >
        <p
          onClick={handleToggle}
          className={`${
            itemOpen && 'text-blue-900'
          } text-xl font-semibold py-2 px-4 cursor-pointer rounded mb-0.5 w-[100%] flex justify-between`}
        >
          {/* <span>{index < 8 ? `0${index + 1}` : index + 1}</span> */}
          <span className="mr-4">{title}</span>
          <span className="font-bold">
            {itemOpen ? <BsChevronUp /> : <BsChevronDown />}
          </span>
        </p>
        <p className={`text-xl px-4 leading-8 ${itemOpen && 'py-2'}`}>
          {itemOpen && children}
        </p>
      </div>
    </>
  );
}

export default Accordion;
