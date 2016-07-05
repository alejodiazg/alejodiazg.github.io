var React = require('react');

var ListItem = React.createClass({
  render: function(){
    return(
      <li>
        <h4>{this.props.ingredient || "empty"}</h4>
      </li>
    )
  }
});

module.exports = ListItem;
