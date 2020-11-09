import React, {useEffect} from 'react'
import * as monaco from 'monaco-editor'

function WindowContainers(props) {
  useEffect(() => {
    self.MonacoEnvironment = {
      getWorkerUrl: function (moduleId, label) {
        if (label === 'json') {
          return '../dist/json.worker.js'
        }
        if (label === 'css') {
          return '../dist/css.worker.js'
        }
        if (label === 'html') {
          return '../dist/html.worker.js'
        }
        if (label === 'typescript' || label === 'javascript') {
          return '../dist/ts.worker.js'
        }
        return '../dist/editor.worker.js'
      },
    }

    let codeEditor = monaco.editor.create(
      document.getElementById('monaco-editor'),
      {
        value: 'console.log("Hello, world")',
        language: 'javascript',
        fontSize: 20,
        automaticLayout: true,
      }
    )
  }, [])

  return (
    <div className="bottom-window-container">
      <div id="left-container-main">
        <div className="command-line-container" id="monaco-editor"></div>
        <div id="terminal-editor">
          <div id="terminal-history">
            <div className="terminal-line">hellsdfsdfo</div>
            <div className="terminal-line">line</div>
            <div className="terminal-line">ofthis</div>
          </div>

          <input id="terminal-input"></input>
        </div>
      </div>

      <div className="program-window-container"></div>
    </div>
  )
}

export default WindowContainers
