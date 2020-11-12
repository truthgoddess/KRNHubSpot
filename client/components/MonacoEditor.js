import React, {useEffect, useState} from 'react'
import * as monaco from 'monaco-editor'
import {TerminalHistory} from '../components'

function MonacoEditor() {
  const [editor, setEditor] = useState(null)
  const [history, setHistory] = useState(['yes', 'no'])
  const [inputContents, setInputContents] = useState('put commands here')
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
        value: 'function welcomeToKatesWebsite(){\n\treturn "instructions"\n}',
        language: 'javascript',
        fontSize: 20,
        automaticLayout: true,
        theme: 'vs-dark',
      }
    )

    setEditor(codeEditor)
  }, [])

  function onEnterClick() {
    const result = editor.getValue()
    console.log(result)
  }

  function onInputChange(event) {
    setInputContents(event.target.value)
  }

  return (
    <React.Fragment>
      <div className="command-line-container" id="monaco-editor"></div>
      <div id="terminal-editor">
        <div id="terminal-history">
          <TerminalHistory history={history} />
        </div>
        <div id="terminal-input-container">
          <input
            id="terminal-input"
            value={inputContents}
            onChange={(e) => {
              onInputChange(e)
            }}
          ></input>
          <div id="button-container">
            <button
              id="enter-button"
              onClick={() => {
                onEnterClick()
              }}
            >
              Enter
            </button>
            <button id="run-button">Run Code</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MonacoEditor
