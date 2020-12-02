import React, {useEffect, useState} from 'react'

import {
  MonacoEditor,
  SimonGame,
  Resume,
  Calculator,
  ProgramRenderer,
} from '../components'

function WindowContainers(props) {
  const [currentProgram, setCurrentProgram] = useState('')

  return (
    <div className="bottom-window-container">
      <div className="bottom-window-box" id="left-container-main">
        <MonacoEditor setCurrentProgram={setCurrentProgram}></MonacoEditor>
      </div>
      <div className="handler"></div>

      <div className="bottom-window-box" id="program-window-container">
        <Resume />
        {/* <ProgramRenderer
          programComponent={currentProgram}
          //programProps={currentResume}
        /> */}
      </div>
    </div>
  )
}

export default WindowContainers
