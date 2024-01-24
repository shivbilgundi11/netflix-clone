import Accordion from "./Accordion";
import EmailForm from "./EmailForm";
import { faqs } from "../constants/resource";

const Faq = () => {
  return (
    <section className="my-2 py-10 md:py-10 bg-black">
      <div className="w-full md:max-container">
        <h2 className="text-center font-netflixBold text-[32px] md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="py-10 px-8 max-container">
          {faqs.map((faq, id) => {
            return <Accordion faq={faq} key={id} />;
          })}
        </div>

        <div className="w-full h-full flex flex-col mb-6 px-4">
          <p className="text-center text-lg sm:text-xl my-6">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <EmailForm />
        </div>
      </div>
    </section>
  );
};

export default Faq;
