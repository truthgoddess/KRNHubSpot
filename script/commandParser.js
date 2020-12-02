import commandList from './terminal_data/terminal_list'
import programList from './terminal_data/program_list'

//takes string and searches program for dictionary
function doesProgramExist(programName) {
  if (commandList[programName]) {
    return commandList[programName]
  } else {
    return false
  }
}

//give string with only arguments no string at beginning
//returns array with arguments
function getArguments(argumentsString) {
  if (
    typeof argumentsString !== 'string' ||
    argumentsString.length === 0 ||
    argumentsString[0] === ' '
  ) {
    return 'argumentsString needs to be a string with no space to start'
  }
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
    //if ! it is a command
    case '!': {
      let firstSpace = terminalEntry.indexOf(' ')
      //command without arguments
      if (firstSpace === -1) {
        let program = doesProgramExist(terminalEntry.slice(1))
        if (program) {
          //check for correct number of arguments
          if (program.requiredArguments !== 0) {
            returnString = `${terminalEntry.slice(1)} requires ${
              program.requiredArguments
            } arguments`
          } else {
            returnProgram = program
            returnString = `running . . . ${terminalEntry.slice(1)}`
          }
        } else {
          returnString = `\'${terminalEntry.slice(
            1
          )}\' is not a recognized program.`
        }
        //command with arguments
      } else {
        console.log('arguments recognized')
        let program = doesProgramExist(terminalEntry.slice(1, firstSpace))
        if (program) {
          returnArguments = getArguments(terminalEntry.slice(firstSpace + 1))
          if (program.requiredArguments !== returnArguments.length) {
            returnString = `${terminalEntry.slice(1, firstSpace)} requires ${
              program.requiredArguments
            } arguments`
          } else {
            console.log('correct number of arguments')
            returnProgram = program
            returnString = `running . . . ${terminalEntry.slice(
              1,
              firstSpace + 1
            )}`
          }
        } else {
          returnString = `${terminalEntry.slice(
            1
          )} is not a recognized program.`
        }
      }
      break
    }
    default: {
      returnString = `${terminalEntry} is not a recognized command`
    }
  }

  return {
    returnProgram,
    returnArguments,
    returnString,
  }
}

export default parseTerminal
