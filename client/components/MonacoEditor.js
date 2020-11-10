import React, {useEffect, useState} from 'react'
import * as monaco from 'monaco-editor'
import {TerminalHistory} from '../components'

function MonacoEditor() {
  const [editor, setEditor] = useState(null)
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
        theme: 'vs-dark',
      }
    )

    setEditor(codeEditor)
  }, [])

  function onRunCodeClick() {
    console.log(eval(editor.getValue()))
  }

  return (
    <React.Fragment>
      <div className="command-line-container" id="monaco-editor"></div>
      <div id="terminal-editor">
        <div id="terminal-history">
          <TerminalHistory history={['three', 'one', 'two', 'three']} />
        </div>
        <div id="terminal-input-container">
          <input id="terminal-input"></input>
          <div id="button-container">
            <button id="enter-button">Enter</button>
            <button
              id="run-button"
              onClick={() => {
                onRunCodeClick()
              }}
            >
              Run Code
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default MonacoEditor
