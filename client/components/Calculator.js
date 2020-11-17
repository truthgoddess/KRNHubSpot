import React from 'react'

// var inputOp = false
// var inputEqual = false
// function calculateString(array) {
//   //inner function to calculate two things
//   console.log('calculating!')
//   function calculateTwoThings(num1, op, num2) {
//     switch (op) {
//       case '×':
//         return num1 * num2
//       case '÷':
//         return num1 / num2
//       case '-':
//         return num1 - num2
//       case '+':
//         return num1 + num2
//     }
//   }
//   //firstPassArr = []; //going to do all multiplication and division first if present
//   var shavedArray = array.slice(0, array.length - 2)
//   for (i = 0; i < shavedArray.length; i++) {
//     if (shavedArray[i] == '÷') {
//       shavedArray[i] = '/'
//     } else if (shavedArray[i] == '×') {
//       shavedArray[i] = '*'
//     }
//   }
//   var shavedString = shavedArray.join('')
//   return eval(shavedString)
// }
// function pressNumberButton(num) {
//   if (inputEqual == true) {
//     document.getElementById('sub-display').innerHTML = ''
//     inputEqual = false
//   }
//   if (inputOp == true) {
//     document.getElementById('main-display').innerHTML = ''
//     inputOp = false
//   }
//   if (
//     num == 11 &&
//     document.getElementById('main-display').innerHTML.indexOf('.') == -1
//   ) {
//     document.getElementById('main-display').innerHTML += '.'
//   } else if (
//     num == 11 &&
//     document.getElementById('main-display').innerHTML.indexOf('.') != -1
//   ) {
//     console.log('hi')
//   } else {
//     document.getElementById('main-display').innerHTML += num
//   }
// }
// function pressOperationButton(op) {
//   //1 is div, 2 is times, 3 is sub, 4 is plus, 5 is equal
//   inputOp = true
//   if (
//     inputEqual == true ||
//     document.getElementById('main-display').innerHTML == ''
//   ) {
//   } else if (op == 1) {
//     document.getElementById('sub-display').innerHTML +=
//       document.getElementById('main-display').innerHTML + ' &divide '
//   } else if (op == 2) {
//     document.getElementById('sub-display').innerHTML +=
//       document.getElementById('main-display').innerHTML + ' &times '
//   } else if (op == 3) {
//     document.getElementById('sub-display').innerHTML +=
//       document.getElementById('main-display').innerHTML + ' - '
//   } else if (op == 4) {
//     document.getElementById('sub-display').innerHTML +=
//       document.getElementById('main-display').innerHTML + ' + '
//   } else if (op == 5 && inputEqual == false) {
//     var userArray = document.getElementById('sub-display').innerHTML.split(' ')
//     console.log(userArray)
//     if (userArray.length == 1) {
//     } else {
//       document.getElementById('sub-display').innerHTML +=
//         document.getElementById('main-display').innerHTML + ' = '
//       var userArray = document
//         .getElementById('sub-display')
//         .innerHTML.split(' ')
//       document.getElementById('main-display').innerHTML = calculateString(
//         userArray
//       )
//       inputEqual = true
//     }
//   }
// }
// //instructions for what happens for clear and backspace buttons
// function pressFunctionButton(func) {
//   //func 1 is clear
//   if (func == 1) {
//     inputEqual = false
//     document.getElementById('main-display').innerHTML = ''
//     document.getElementById('sub-display').innerHTML = ''
//   } else if (func == 2) {
//     //func 2 is backspace
//     if (inputOp == true) {
//     } else if (inputEqual == false) {
//         document.getElementById(
//           'main-display'
//         ).innerHTML = document
//           .getElementById('main-display')
//           .innerHTML.slice(
//             0,
//             document.getElementById('main-display').innerHTML.length - 1
//           )
//       } else {
//       }
//   }
// }

function Calculator() {
  return (
    <div className="calculator-container">
      <div className="calculator-row">
        <div className="btn-group">
          <button
            type="button"
            className="btn med-btn"
            onClick={() => pressFunctionButton(1)}
          >
            Clear
          </button>
          <button
            type="button"
            className="btn med-btn"
            onClick={() => pressFunctionButton(2)}
          >
            &lt--
          </button>
        </div>
      </div>
      <div className="row calc-input">
        <p id="main-display" className="main-display"></p>
      </div>
      <div className="row calc-input">
        <p id="sub-display" className="sub-display"></p>
      </div>
      <div className="row">
        <div className="btn-group">
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(7)}
          >
            7
          </button>
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(8)}
          >
            8
          </button>
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(2)}
          >
            9
          </button>
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(1)}
          >
            &divide;
          </button>
        </div>
      </div>
      <div className="row">
        <div className="btn-group">
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(4)}
          >
            4
          </button>
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(5)}
          >
            5
          </button>
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(6)}
          >
            6
          </button>
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(2)}
          >
            &times;
          </button>
        </div>
      </div>
      <div className="row">
        <div className="btn-group">
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(1)}
          >
            1
          </button>
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(2)}
          >
            2
          </button>
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(3)}
          >
            3
          </button>
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(3)}
          >
            -
          </button>
        </div>
      </div>
      <div className="row">
        <div className="btn-group">
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(0)}
          >
            0
          </button>
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(11)}
          >
            .
          </button>
          <button type="button" className="btn reg-btn"></button>
          <button
            type="button"
            className="btn reg-btn"
            onClick={() => pressFunctionButton(4)}
          >
            +
          </button>
        </div>
      </div>
      <div className="row">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-block lrg-btn"
            onClick={() => pressFunctionButton(5)}
          >
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
