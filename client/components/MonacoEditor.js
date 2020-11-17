import React, {useEffect, useState} from 'react'
import * as monaco from 'monaco-editor'
import {TerminalHistory} from '../components'
import parseTerminal from '../../script/commandParser'
import {Calculator, SimonGame, Resume} from './index'

function scrollToBottom() {
  let terminalEditor = document.getElementById('terminal-editor')
  terminalEditor.scrollTop = terminalEditor.scrollHeight
}

function MonacoEditor(props) {
  const [editor, setEditor] = useState(null)
  const [history, setHistory] = useState([])
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

  function onTerminalSubmit(event) {
    let tempUser = 'guest2837'
    scrollToBottom()
    //get actual user eventually
    event.preventDefault()
    let historyCopy = [...history]
    historyCopy.push('@' + tempUser + ' :: ' + inputContents)
    setHistory(historyCopy)
    let programInfo = parseTerminal(inputContents)
    console.log('programInfo', programInfo)
    if (programInfo.returnProgram) {
      programInfo.returnProgram.programFunction(
        programInfo.returnProgram.arguments
      )
    }
    //programInfo.program()
    historyCopy.push('@' + 'kates_website' + ' :: ' + programInfo.returnString)
    //send return string to terminal window
    //scroll window to bottom
    props.setCurrentProgram(Resume)
    setInputContents('')
  }

  return (
    <React.Fragment>
      <div className="command-line-container" id="monaco-editor"></div>
      <div id="terminal-editor">
        <div id="terminal-history">
          <TerminalHistory history={history} />
        </div>
      </div>
      <div id="lala">
        <form
          onSubmit={(e) => {
            onTerminalSubmit(e)
          }}
        >
          <div id="terminal-input-container">
            <input
              id="terminal-input"
              value={inputContents}
              onChange={(e) => {
                onInputChange(e)
              }}
            ></input>
            <button id="enter-button" type="submit">
              Enter
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default MonacoEditor
