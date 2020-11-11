import React from 'react'

export default function Number(props) {
  return (
    <div>
      {props.astros.map((astro, index) => (
        <div key={index}>
          <p>Name: {astro.name}</p>
          <p>Spacecraft: {astro.craft}</p>
        </div>
      ))}
    </div>
  )

}
