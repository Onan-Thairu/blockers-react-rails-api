import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  let navigate = useNavigate()

  fetch(`/logout`)
  .then((res) => {
    navigate("/")
  })

  return (
    <div>You are being logged out.</div>
  )
}

export default Logout