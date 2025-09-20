import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import HomePage from "./components/HomePage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<RegistrationPage />} />
          <Route path = "/login" element = {<LoginPage />} />
          <Route path = "/home" element = {<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;