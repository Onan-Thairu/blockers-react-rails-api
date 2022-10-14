import { useState, useEffect } from "react"
import Description from "./Description"

function Blockers({currentUser}) {

  const [blockers, setBlockers] = useState([])

  useEffect(() => {
    getBlockers()
  }, [])

  const getBlockers = () => {
    fetch('/blockers')
      .then((response) => response.json())
      .then((data) => {
        setBlockers(data)
      })
  }

  const handleDelete = (id) => {
    fetch(`/blockers/${id}`, {
      method: "DELETE",
    })
    .then(() => {
      getBlockers()
    })
  }
  return (
    <>
      {
        blockers.map((blocker) => {
          return (
            <Description key={blocker.id} blocker={blocker} handleDelete={handleDelete} currentUser={currentUser} />
          )
        })
      }
    </>
  )
}

export default Blockers