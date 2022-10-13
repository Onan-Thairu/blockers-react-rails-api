import { useState, useEffect } from "react"
import Description from "./Description"

function Blockers() {

  const [blockers, setBlockers] = useState([])

  useEffect(() => {
    getBlockers()
  }, [])

  const getBlockers = () => {
    fetch('/blockers')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setBlockers(data)
      })
  }

  const handleDelete = (id) => {
    fetch(`/blockers/${id}`, {
      method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => {
      getBlockers()
    })
  }
  return (
    <>
      {
        blockers.map((blocker) => {
          return (
            <Description key={blocker.id} blocker={blocker} handleDelete={handleDelete} />
          )
        })
      }
    </>
  )
}

export default Blockers