import React, {useEffect} from 'react'

import {MonacoEditor} from '../components'

function WindowContainers(props) {
  return (
    <div className="bottom-window-container">
      <div id="left-container-main">
        <MonacoEditor></MonacoEditor>
      </div>

      <div className="program-window-container"></div>
    </div>
  )
}

export default WindowContainers
