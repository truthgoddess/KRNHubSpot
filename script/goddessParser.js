import {run} from './terminal_programs'

function parseTerminal(terminalEntry) {
  let returnString = ''
  let programFound = false
  console.log(terminalEntry, 'hi from parseTerminal')

  return {
    program: run,
    arguments: [],
    returnString: 'thanks for your message',
  }
}

export default parseTerminal
