import styled from "styled-components"
import { Link } from "react-router-dom"
import { ReactComponent as Photo } from "../images/img1.svg"

function LandingPage() {
  return (
    <>
      <Logo>
        <h4>Blockers</h4>
      </Logo>
      <HeroContainer>
        <Hero>
          Do you have blockers that you'd like to save for a quick reference in the 
          future? Or some other important code snippets you use often but can't seem
          to remember the exact commands?
          <p>
            We've got you! No need to keep going through search results again looking for a specific
            result. Signup with us and we'll help you save them conveniently.
          </p>
        </Hero>
        <StyledPhoto />
      </HeroContainer>
      <Btn>
        <AddBtn to='/list-all'>EXPLORE</AddBtn>
        <AddBtn to='/login'>LOG IN</AddBtn>
        <AddBtn to='/signup'>SIGN UP</AddBtn>
      </Btn>
      
    </>

  )
}

const Logo = styled.div`
  h4 {
    font-family: 'Dancing Script', cursive;
    font-weight: 900;
    font-size: 2.5em;
    letter-spacing: 0.3em;
    margin-top: 1rem;
  }
`

const StyledPhoto = styled(Photo)`
  height: 240px;
  margin-top: 10%;
`
const HeroContainer = styled.div`
  display: flex;
  gap: 10px;
`

const Hero = styled.div`
  margin-top: 10%;
  font-size: 1.1em;
  
  font-weight: 600;
  background-color: #FFFFFF;
  padding: 1rem;
  border-radius: .5rem;
  color: #4A4A4A;
  
  p {
    background-color: #e0e0e0fd;
    font-size: 1rem;
    font-weight: 400;
    margin-top: .6rem;
    color: #4A4A4A;
    padding: 1rem;
    border-radius: .8rem;
  }
`

const AddBtn = styled(Link)`
  text-decoration: none;
  background-color: #FFFFFF;
  color: #4A4A4A;
  font-size: .9rem;
  font-weight: 600;
  padding: .8rem .6rem;
  letter-spacing: .1rem;
  border-radius: .3rem;
  &:hover {
    background-color: #4A4A4A;
    color: #FFFFFF;
  }
`

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  margin: 5rem auto;
  gap: 4rem;
`
export default LandingPage