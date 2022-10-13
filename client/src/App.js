import { useEffect, useState } from "react";
import Pages from "./pages/Pages";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me")
      .then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user))
        }
      })
  }, [])
  return (
    <div className="App">
      {
        user ? <h2>Hello {user.username}</h2> : null
      }
      <Pages />
    </div>
  );
}

export default App;
