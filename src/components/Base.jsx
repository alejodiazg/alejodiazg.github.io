var React = require('react');
var NavBar = require('./NavBar/NavBar.jsx');

var navLinks = [
  {
    href: "/",
    title: "Home"
  },
  {
    href: "/page2",
    title: "Prueba 2"
  }
]

var Base = React.createClass({
  render: function(){
    return (
        <div className="app-container">
          <NavBar links={navLinks}/>
          {this.props.children}
        </div>
    )
  }
});
module.exports = Base;
