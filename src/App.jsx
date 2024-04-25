import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import RegistrationForm from "./components/registrationForm/RegistrationForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="title">React Components</h1>
                <ul
                  style={{
                    marginLeft: "20px",
                    textAlign: "left",
                  }}
                >
                  <li>
                    <Link to={"/registration"}>Registration Form</Link>
                  </li>
                </ul>
              </>
            }
          />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
