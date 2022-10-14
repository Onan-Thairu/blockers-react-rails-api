import styled from "styled-components";

function Filter({handleFilter}) {

  const onTagChange = (e) => {
    handleFilter(e.target.value)
  }

  return (
    <FilterContainer>
      <p>Filter by</p>
      <select id="tags" name="tags" onChange={ onTagChange } >
        <option value="all">All</option>
        <option value="react">React</option>
        <option value="ruby">Ruby</option>
        <option value="javascript">Javascript</option>
      </select>
    </FilterContainer>
  )
}

const FilterContainer = styled.div`
  display: flex;
  width: 300px;
  margin: 0rem auto;
  margin-bottom: 1rem;
  p {
    padding-right: 1rem;
    font-weight: 600;
    color: #4A4A4A;
  }
  select {
    border:none;
    border-radius: .3rem;
  }
`

export default Filter