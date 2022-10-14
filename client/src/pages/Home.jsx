import Blockers from "../components/Blockers"
import styled from "styled-components"
import { Link } from "react-router-dom"

function Home({user}) {
  return (
    <>
      <div>
        <Header>
          <h4>Blockers</h4>
          { user ? <AddBtn to='/create-blocker'>ADD BLOCKER</AddBtn> : null }
          {/* { user ? <a href="/logout">Logout</a> : null } */}
          { user ? <Nav to="/logout">Logout</Nav> : <Nav to="/login">Login</Nav> }
        </Header>
          {/* { user ? <a href="/logout">Logout</a> : null } */}
        <Blockers />
      </div>
    </>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: .8rem;
  margin-bottom: 1rem;
  text-align: center;
  h4 {
    font-family: 'Dancing Script', cursive;
    font-weight: 900;
    font-size: 1.5em;
    letter-spacing: 0.3em;
  }
`
const AddBtn = styled(Link)`
  text-decoration: none;
  background-color: #FFFFFF;
  color: #4A4A4A;
  font-size: 0.7rem;
  font-weight: 900;
  padding: .7rem .8rem;
  letter-spacing: .1rem;
  border-radius: .5rem;
  &:hover {
    background-color: #4A4A4A;
    color: #FFFFFF;
  }
`

const Nav = styled(Link)`
  color: #4A4A4A;
  font-size: .8rem;
  font-weight: 900;
`

export default Home