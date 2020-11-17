import React, {useEffect, useState} from 'react'

import {MonacoEditor, SimonGame, Resume} from '../components'
import Calculator from './Calculator'

function WindowContainers(props) {
  const [currentProgram, setCurrentProgram] = useState(Resume)
  useEffect(() => {}, [])

  return (
    <div className="bottom-window-container">
      <div className="bottom-window-box" id="left-container-main">
        <MonacoEditor setCurrentProgram={setCurrentProgram}></MonacoEditor>
      </div>
      <div className="handler"></div>

      <div className="bottom-window-box" id="program-window-container">
        {currentProgram}
      </div>
    </div>
  )
}

export default WindowContainers
