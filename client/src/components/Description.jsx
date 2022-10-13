import styled from "styled-components"
import Solution from "./Solution"
import { AiOutlineDelete } from 'react-icons/ai'

function Description({blocker, handleDelete }) {

  return (
    <>
      <Container>
        <h2 onClick={() => handleDelete(blocker.id)} ><AiOutlineDelete /></h2>
        <h4>{blocker.description}</h4>
        <Solution solution={ blocker.solution} />
        <h6>By {blocker.user.username}</h6>
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: #FFFFFF;
  padding: .5rem;
  border-radius: .3rem;
  color: #363636;
  margin-bottom: 1.2rem;
  line-height: 1.6rem;
  font-size: .9rem;
  h6 {
    margin: 0;
    padding: 0;
    color: #363636;
  }
  h2 {
    display: flex;
    float: right;
  }
  h4 {
    color: #363636;
  }
  box-shadow: 3px 4px 5px -3px rgba(107,101,101,0.75);
  -webkit-box-shadow: 3px 4px 5px -3px rgba(107,101,101,0.75);
  -moz-box-shadow: 3px 4px 5px -3px rgba(107,101,101,0.75);
`

export default Description