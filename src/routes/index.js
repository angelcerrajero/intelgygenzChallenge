const express = require('express')
const app = express()

const _checkOne = (charNumberAct) => (charNumberAct === '1');

const _specialSort = (numberA, numberB) => {
  // Get/Count the amount of  'Ones' of a Binary number
  const numberOfOnesA = [...numberA.binaryNumber].filter(_checkOne).length;
  const numberOfOnesB = [...numberB.binaryNumber].filter(_checkOne).length;

  if (numberOfOnesA > numberOfOnesB || (numberOfOnesA === numberOfOnesB && numberA.intNumber < numberB.intNumber)) {
    return -1
  } else {
    return 1
  }
};

const welcome = function (req, res, next) {
  res.send('Welcome to the Intelygenz talent test!')
}

const welcomeUser = function (req, res, next) {
  res.send(req.params)
}

const sortNumbers = function (req, res, next) {

  // Get params into array using split() method to separate by ","
  const charNumbers = req.params.numbers ? req.params.numbers.split(',') : []

  // Convert array chars to Integer using parseInt base 10 (decimal)
  const intNumbers = charNumbers.map(actual => parseInt(actual, 10))

  // Create array of JSON to work with.
  const mappedNumbers = intNumbers.map((actual) => ({intNumber: actual, binaryNumber: actual.toString(2)}))

  // Order array
  const orderedNumbers = mappedNumbers.sort(_specialSort)

  // Format output
  const output = orderedNumbers.map(numberAct => (numberAct.intNumber))

  res.send(output)

}



app.get('/', welcome)
app.get('/welcome', welcome)
app.get('/welcome/:username', welcomeUser)
app.get('/sortNumbers/:numbers', sortNumbers)

module.exports = app
