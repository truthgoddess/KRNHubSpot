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
  const terminalSplitterString = '::'
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
    event.preventDefault()

    let tempUser = 'guest2837'
    let nonUser = 'kate_norton_AI'
    let userTerminalString = `@ ${tempUser} ${terminalSplitterString} ${inputContents}`
    let kateTerminalString = `@ ${nonUser} ${terminalSplitterString}`

    //get current command from user
    let historyCopy = [...history]
    historyCopy.push(userTerminalString)
    setHistory(historyCopy)

    //
    let programInfo = parseTerminal(inputContents)
    console.log('programInfo in onTerminalSubmit', programInfo)
    let componentStringName = ''
    if (programInfo.returnProgram) {
      componentStringName = programInfo.returnProgram.programFunction(
        programInfo.returnArguments
      )
    }
    console.log('component string name', componentStringName)
    historyCopy.push(`${kateTerminalString} ${programInfo.returnString}`)
    //send return string to terminal window
    //scroll window to bottom
    if (componentStringName) {
      switch (componentStringName) {
        case 'resume':
          props.setCurrentProgram(<Resume />)
      }
    }
    //props.setCurrentProgram(<Resume />)
    setInputContents('')
    scrollToBottom()
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
