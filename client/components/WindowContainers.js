import React, {useEffect, useState} from 'react'

import {
  MonacoEditor,
  SimonGame,
  Resume,
  Calculator,
  ProgramRenderer,
} from '../components'

function WindowContainers(props) {
  const [currentResume, setCurrentResume] = useState('')
  const [currentProgram, setCurrentProgram] = useState(Resume)
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/truthgoddess/e90ad2e7d4f6183c722223a83aaf1753/raw/ce08334941dfcaf209cade9e32c14761ec8ee560/KateNortonResume.md'
    )
      .then((res) => res.text())
      .then((text) => setCurrentResume(text))
  }, [])

  return (
    <div className="bottom-window-container">
      <div className="bottom-window-box" id="left-container-main">
        <MonacoEditor setCurrentProgram={setCurrentProgram}></MonacoEditor>
      </div>
      <div className="handler"></div>

      <div className="bottom-window-box" id="program-window-container">
        <ProgramRenderer
          programComponent={currentProgram}
          programProps={currentResume}
        />
      </div>
    </div>
  )
}

export default WindowContainers
