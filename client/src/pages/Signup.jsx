import styled from "styled-components"
import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import { useState } from "react"

function Signup() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("")

  // let navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault()
    fetch(`/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation
      })
    })
    .then((response) => console.log(response))
    // .then(() => {
    //   navigate('/login')
    // })
  }

  return (
    <Wrapper>
      <Link to={"/list-all"}>Home</Link>
      <h4>SIGN UP</h4>
      <div>
        <Form onSubmit={ handleSignup }>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="on" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input type="password" id="password_confirmation" required value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
          </div>
          <button>SUBMIT</button>
          <p>Already have an account? <Link to={"/login"} id="login">Login</Link></p>
          {/* <p id="onlogin"></p> */}
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
  #login {
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
export default Signup