import { useState, useEffect } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Logout from "./Logout";
import LandingPage from "./LandingPage";
import Home from "./Home";
import CreateBlocker from "./CreateBlocker";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Pages() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => setCurrentUser(user))
        }
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> } ></Route>
        <Route path="/list-all" element={ <Home currentUser={currentUser} /> }></Route>
        <Route path="/create-blocker" element={ <CreateBlocker /> }></Route>
        <Route path="/signup" element={ <Signup /> } ></Route>
        <Route path="/login" element={ <Login setCurrentUser={setCurrentUser} /> } ></Route>
        <Route path="/logout" element={ <Logout setCurrentUser={setCurrentUser} /> } ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages