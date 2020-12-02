import React, {useEffect} from 'react'

function ProgramRenderer(props) {
  //console.log(props, 'propsInProgramRenderer')
  //let [testHook, setTextHook] = useEffect('')
  let Program = props.programComponent
  let programProps = props ? props.programProps : ''
  console.log('Program in ProgramRenderer', Program)
  return (
    // <div>hello</div>
    // <div>{props ? <Program /> : ''}</div>
    <div>
      {Program}
      {/* <Program programProps={programProps} /> */}
    </div>
  )
}

export default ProgramRenderer
