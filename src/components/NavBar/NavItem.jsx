var React = require('react');
var Link = require('react-router').Link;
var NavItem = React.createClass({
  render:  function(){
    return (
      <li>
        <Link className="nav-link" to={this.props.href}>{this.props.title}</Link>
      </li>
    )
  }
});

module.exports = NavItem;
