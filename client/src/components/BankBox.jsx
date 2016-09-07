var React = require('react')
var AccountSelect = require('./AccountSelect')
var AccountDetail = require('./AccountDetail')
var AccountForm = require('./AccountForm')
var Bank = require('../models/bank/bank')


var BankBox = React.createClass({

  getInitialState: function(){
    var bank = new Bank()
    this.props.sampleData.forEach(function(account){
      bank.addAccount(account)
    })
    return {accounts: bank.accounts, currentAccount: bank.accounts[0]}
  },

  // handleAccountFilter: function(type){
  //   var bank = new Bank()
  //   this.state.accounts.forEach(function(account){
  //     bank.addAccount(account)
  //   })
  //   bank.filteredAccounts(type)
  //   this.setState({accounts: bank.accounts})
  // },

  handleAccountSubmit: function(newAccount){
    newAccount.id = this.state.accounts.length + 1

    var bank = new Bank()
    this.state.accounts.forEach(function(account){
      bank.addAccount(account)
    })

    bank.addAccount(newAccount)
    this.setState({accounts: bank.accounts})
  },


  setCurrentAccount: function(account){
    this.setState({currentAccount: account})
  },

  render: function(){
    console.log("Hi Davide, I've Rendered!")
    return (
      <div className = 'bank-box'>
        <h4>Bank</h4>
        <AccountSelect accounts = {this.state.accounts} setCurrentAccount = {this.setCurrentAccount} />
        <AccountDetail account = {this.state.currentAccount} />
        <AccountForm handleAccountSubmit = {this.handleAccountSubmit} />
      </div>
    )
  }
})

module.exports = BankBox