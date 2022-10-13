import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"
// import { useNavigate } from "react-router-dom"

function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // let navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({username, password})
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    // .then((data) => {
    //   localStorage.setItem("currentUser", data.user_id)
    //   navigate("/blockers-list")
    // })
  }

  return (
    <Wrapper>
      <Link to={"/"}>Home</Link>
      <h4>LOGIN</h4>
      <div>
        <Form onSubmit={ handleLogin }>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" required onChange={(e) => setUsername(e.target.value) } />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" required onChange={(e) => setPassword(e.target.value) } />
          </div>
          <button>SUBMIT</button>
          <p>Don't have an account? <Link to={"/signup"} id="signup" >Signup</Link></p>
        </Form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  h4 {
    margin: 3rem .2rem;
    font-weight: 900;
  }
  a {
    display: flex;
    width: 5rem;
    margin: 1rem 0;
    text-decoration: none;
    font-weight: 600;
  }
  #signup {
    display: inline-block;
    text-decoration: underline;
    color: #005b96;
    font-size: .8rem;
  }
`

const Form = styled.form`
  background-color: #F4F4ED;
  line-height: 2;
  width: 30em;
  margin: 0 auto;
  padding: 1rem;
  border-radius: .5rem;
  div {
    margin-top: .2rem;
  }
  label {
    color: #778472;
    font-weight: 900;
    margin: .5rem;
  }
  input {
    padding: 0.5rem;
    width: 90%;
    border: none;
    border-radius: .5rem;
  }
  button {
    background-color: #778472;
    border: none;
    border-radius: .5rem;
    color: #fff;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    font-weight: 900;
    &:hover {
      background-color: #fff;
      color: #778472;
    }
  }
  box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);
  -webkit-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);
  -moz-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);
`
export default Login