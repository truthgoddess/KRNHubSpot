import {terminal_list} from '../terminal_data'
import {program_list} from '../terminal_data'

function run(args) {
  console.log('terminalList', terminal_list)
  console.log('program_list', program_list)
  console.log('run function called with these arguments', args[0])
  if (program_list[args[0]]) {
    return args[0]
  } else {
    console.log('program does not exist')
  }
}

export default run
