import React from 'react'

const Name = (probs) => {
  return (
    <div>
        <h1>Merhaba <span style={{color:"red"}}>{probs.name}</span></h1>
      <p>{probs.message}</p>
    </div>
  )
}

export default Name
