import Signup from "./Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={ <Signup /> } ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages