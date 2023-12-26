import { ChevronRight } from "lucide-react";

const EmailForm = () => {
    return (
      <div className="flex mx-auto items-center justify-center flex-wrap gap-y-4 gap-x-2">
        <input
          type="email"
          name="email"
          placeholder="Email address"
          id="email"
          autoComplete="false"
          className="input-email email-bg"
        />
        <button className="btn-secondary">
          Get Started {<ChevronRight color="#fff" />}
        </button>
      </div>
    );
}
 
export default EmailForm;