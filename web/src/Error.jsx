import "./App.css";


function Error() {
  setTimeout(() => {
    window.location.href = "https://apu.edu/";
  }, 2000);
  return (
    <>
      <div className="main">
        <div className="form-container">
          <h1 className="form-head">Unknown Request</h1>
          <div className="text">
            The authentication request submitted to CAS is invalid, incorrectly
            constructed, or contains parameters that are seen as invalid or
            expired. Please review the original request, consult CAS logs and
            try again.
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
