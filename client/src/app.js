var React = require('react')
var ReactDOM = require('react-dom')
var BankBox = require('./components/BankBox')
var Bank = require('./models/bank/bank')

window.onload = function(){
  var sampleData = [
    {id: 0, owner: "Davide", amount: "3400000", type: "Business"},
    {id: 1, owner: "Davide", amount: "560", type: "Personal"},
    {id: 2, owner: "Josh", amount: "99", type: "Business"},
    {id: 3, owner: "Josh", amount: "200000", type: "Personal"},
  ]

  ReactDOM.render(
    <BankBox sampleData={sampleData}/>,
    document.getElementById('app')
  )
}