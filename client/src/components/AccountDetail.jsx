var React = require('react')

var AccountDetail = React.createClass({

  render: function(){
    return (
      <div>
        <h4>{this.props.account.owner}</h4>
        <p>Account Type: {this.props.account.type}</p>
        <p>Amount: £{this.props.account.amount}</p>
      </div>
    )
  }
})

module.exports = AccountDetail