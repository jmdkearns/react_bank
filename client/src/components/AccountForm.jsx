var React = require('react')

var AccountForm = React.createClass({

  getInitialState: function(){
    return {id: '', owner: '', type: '', amount: ''}
  },

  handleOwnerChange: function(event){
    this.setState( {owner: event.target.value} )
  },

  handleTypeChange: function(event){
    this.setState( {type: event.target.value} )
  },

  handleAmountChange: function(event){
    this.setState( {amount: event.target.value} )
  },

  handleSubmit: function(event){
    event.preventDefault()
    var owner = this.state.owner.trim()
    var type = this.state.type.trim()
    var amount = this.state.amount.trim()
    if (!owner, !amount, !type){
      return
    }
    this.props.handleAccountSubmit( {owner: owner, type: type, amount: amount} )
    this.setState( {owner: '', type: '', amount: ''} )
  },

  render: function(){
    return (
      <form className='account-form' onSubmit={this.handleSubmit}>
        <input type="text" placeholder= "Enter name..." 
          value={this.state.owner} 
          onChange={this.handleOwnerChange}
        />
        <input type="text" placeholder= "Enter type..." 
          value={this.state.type} 
          onChange={this.handleTypeChange}
        />
        <input type="number" placeholder= "Enter amount..." 
          value={this.state.amount} 
          onChange={this.handleAmountChange}
        />
        <input type="submit" value="Add Account"/>
      </form>
    )
  }
})

module.exports = AccountForm