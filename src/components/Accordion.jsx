import { useState } from "react";
import { Plus, X } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Accordion = ({ faq }) => {
  const [isClose, setisClose] = useState(false);

  return (
    <div className="my-1">
      <p
        className={`w-full p-6 bg-dark-gray cursor-pointer text-lg flex items-center justify-between hover:bg-light-gray md:text-2xl ${
          isClose && "rotate-180deg"
        }`}
        onClick={() => setisClose(!isClose)}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {faq.title}

        {!isClose ? <Plus color="#ffffff" /> : <X color="#ffffff" />}
      </p>

      <p
        className={`bg-dark-gray p-6 w-full text-lg mt-0.5 font-netflixRg font-thin ${
          isClose ? "block" : "hidden"
        } leading-8 md:text-2xl`}
      >
        {/* eslint-disable-next-line react/prop-types */}
        {faq.answer}
      </p>
    </div>
  );
};

export default Accordion;
