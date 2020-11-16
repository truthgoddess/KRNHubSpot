import {run} from './terminal_programs'

let programDictionary = {
  run: {
    programFunction: run,
    requiredArguments: 0,
  },
}

function doesProgramExist(programName) {
  if (programDictionary[programName]) {
    return programDictionary[programName]
  } else {
    return false
  }
}

function getArguments(argumentsString) {
  let argumentBucket = []
  let remainingString = argumentsString
  while (remainingString.length > 0) {
    let nextSpace = remainingString.indexOf(' ')
    if (nextSpace !== -1) {
      argumentBucket.push(remainingString.slice(0, nextSpace))
      remainingString = remainingString.slice(nextSpace + 1)
    } else {
      argumentBucket.push(remainingString)
      remainingString = ''
    }
  }
  return argumentBucket
}

function parseTerminal(terminalEntry) {
  console.log('running parseTerminal with this command: ', terminalEntry)
  let returnString = ''
  let returnProgram
  let returnArguments = []
  let firstCharacter = terminalEntry[0]

  switch (firstCharacter) {
    case '!': {
      let firstSpace = terminalEntry.indexOf(' ')
      if (firstSpace === -1) {
        let program = doesProgramExist(terminalEntry.slice(1))
        if (program) {
          returnProgram = program
        }
      } else {
        let program = doesProgramExist(terminalEntry.slice(1, firstSpace))
        if (program) {
          returnProgram = program
        }
      }
    }
  }

  return {
    returnProgram,
    arguments: [],
    returnString,
  }
}

export default parseTerminal
