import React from 'react'

function TerminalHistory(props) {
  let history = props.history

  return (
    <React.Fragment>
      {history.map((text, index) => {
        return (
          <div key={index} className="terminal-line">
            {text}
          </div>
        )
      })}
    </React.Fragment>
  )
}

export default TerminalHistory
