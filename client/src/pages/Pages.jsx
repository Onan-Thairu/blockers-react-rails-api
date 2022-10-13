import Signup from "./Signup";
import Login from "./Login";
import LandingPage from "./LandingPage";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> } ></Route>
        <Route path="/list-all" element={ <Home /> }></Route>
        <Route path="/signup" element={ <Signup /> } ></Route>
        <Route path="/login" element={ <Login /> } ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages