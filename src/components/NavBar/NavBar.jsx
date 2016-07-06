var React = require('react');
var NavItem = require('./NavItem.jsx');

var NavBar = React.createClass({
  render: function(){

    var createLinkItem = function(item , index){
      return (<NavItem key={item.title + index} href={item.href} title={item.title}/>)
    };

    return(
      <nav className="app-navbar app-navbar-push-left app-navbar-center-vert">
        <ul>
          {this.props.links.map(createLinkItem)}
          <li className="social">A</li>
          <li className="social">G</li>
          <li className="social">B</li>
        </ul>
      </nav>
    )
  }
});

module.exports = NavBar;
