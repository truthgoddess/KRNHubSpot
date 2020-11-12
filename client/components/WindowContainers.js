import React, {useEffect} from 'react'

import {MonacoEditor} from '../components'

function WindowContainers(props) {
  useEffect(() => {}, [])

  return (
    <div className="bottom-window-container">
      <div className="bottom-window-box" id="left-container-main">
        <MonacoEditor></MonacoEditor>
      </div>
      <div className="handler"></div>

      <div className="bottom-window-box" id="program-window-container"></div>
    </div>
  )
}

export default WindowContainers
