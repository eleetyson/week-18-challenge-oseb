import React from 'react'

export default function Number(props) {
  return (
    <>
      {props.astros.map((astro, index) => (
        <div key={index}>
          <p>Name: {astro.name}</p>
          <p>Spacecraft: {astro.craft}</p>
          <br></br>
        </div>
      ))}
    </>
  )

}
