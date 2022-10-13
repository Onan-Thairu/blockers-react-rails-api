import styled from "styled-components"

function Solution({solution}) {
  return (
    <Sol>
      <p>
        {solution}
      </p>
    </Sol>
  )
}

// background-color: #F4F4ED;
// color: #2F2F30;
const Sol = styled.div`
  color: #4A4A4A;
  background-color: #e0e0e0fd;
  margin: .5rem 1rem;
  padding: .3rem .4rem;
  border-radius: .3rem;
  font-size: .9rem;
  font-weight: 500;
`
export default Solution