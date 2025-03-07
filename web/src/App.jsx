import Address from "./Address";
import "./App.css";
import logo from "./assets/apu-logo.svg";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Error from "./Error";
function App() {
  return (
    <>
      <div className="nav">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </div>
      <div className="headline">Central Authentication Service</div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Address />} />
          <Route path="/apu.edu" element={<Address />} />
          <Route path="/apu.edu/error" element={<Error />} />
          <Route path="/apu.edu/service/update" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <hr />
        <ul>
          <li>
            <a href="#">Contact the IT Support Center</a>
          </li>
          <li>
            <a href="#">University Website: www.apu.edu</a>
          </li>
          <li>
            <a href="#">University Portal: home.apu.edu</a>
          </li>
          <li>
            <a href="#">Powered by Apereo Central Authentication Service</a>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default App;
