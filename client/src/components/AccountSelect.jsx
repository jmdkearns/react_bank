var React = require('react')

var AccountSelect = React.createClass({

  getInitialState: function(){
    return {selectedIndex: 0}
  },

  handleChange: function(event){
    var newIndex = event.target.value
    this.setState( {selectedIndex: newIndex} )
    this.props.setCurrentAccount( this.props.accounts[newIndex] )
    console.log(this.props.accounts[newIndex])
  },

  render: function(){
    var accountSelected = this.props.accounts.map(function(account, index){
      return (
        <option value={index} key={index}>
          {account.owner} - {account.type}
        </option>
      )
    }.bind(this))

    return (
      <div className='account-select'>
        <h4>Account Select</h4>
          <select value={this.state.selectedIndex} onChange={this.handleChange}>
            {accountSelected}
          </select>
      </div>
    )
  }
})

module.exports = AccountSelect