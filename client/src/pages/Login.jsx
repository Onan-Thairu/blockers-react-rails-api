import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login({ setCurrentUser }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  let navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    fetch(`/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password})
    })
    .then((response) => response.json())
    .then((user) => {
      setCurrentUser(user)
      navigate("/list-all")
    })
  }

  return (
    <Wrapper>
      <Link to={"/list-all"}>Home</Link>
      <h4>LOGIN</h4>
      <div>
        <Form onSubmit={ handleLogin }>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" required onChange={(e) => setUsername(e.target.value) } />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" autoComplete="on" required onChange={(e) => setPassword(e.target.value) } />
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
    color: #4A4A4A;
    font-size: .8rem;
  }
`

const Form = styled.form`
  background-color: #FFFFFF;
  line-height: 2;
  width: 30em;
  margin: 0 auto;
  padding: 1rem;
  border-radius: .3rem;
  div {
    margin-top: .2rem;
  }
  label {
    color: #4A4A4A;
    font-weight: 900;
    margin: .5rem;
  }
  input {
    padding: 0.5rem;
    width: 90%;
    border: none;
    border-radius: .3rem;
    background-color: #e0e0e0fd;
  }
  button {
    background-color: #e0e0e0fd;
    border: none;
    border-radius: .5rem;
    color: #4A4A4A;
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    font-weight: 900;
    &:hover {
      background-color: #4A4A4A;
      color: #FFFFFF;
    }
  }
  box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);
  -webkit-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);
  -moz-box-shadow: 0px 1px 5px 2px rgba(194,194,194,0.75);
`
export default Login