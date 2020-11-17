import React from 'react'

function ProgramRenderer(props) {
  console.log(props)
  let Program = props.programComponent
  let programProps = props.programProps
  return (
    <div>{props ? <Program /> : ''}</div>
    // <Program props={props} />
  )
}

export default ProgramRenderer
