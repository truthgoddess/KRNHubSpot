import React, {useEffect} from 'react'

function ProgramRenderer(props) {
  //console.log(props, 'propsInProgramRenderer')
  //let [testHook, setTextHook] = useEffect('')
  let Program = props.currentProgram
  let programProps = props ? props.programProps : 'd'
  return (
    // <div>hello</div>
    // <div>{props ? <Program /> : ''}</div>
    <div>
      {props.currentProgram}
      {/* <Program programProps={programProps} /> */}
    </div>
  )
}

export default ProgramRenderer
