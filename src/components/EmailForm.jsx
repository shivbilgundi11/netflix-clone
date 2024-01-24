import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getEmail } from "../app/features/userSlice";

const EmailForm = () => {
  const [emailId, setEmailId] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getStarted = () => {
    if (emailId) {
      dispatch(getEmail(emailId));
      navigate("/login");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex mx-auto items-center justify-center flex-wrap gap-y-4 gap-x-2">
      <input
        type="email"
        name="getstartedEmail"
        placeholder="Email address"
        value={emailId}
        onChange={(e) => setEmailId(e.target.value)}
        autoComplete="false"
        className="input-email email-bg"
      />
      <button className="btn-secondary" onClick={getStarted}>
        Get Started {<ChevronRight color="#fff" />}
      </button>
    </div>
  );
};

export default EmailForm;
