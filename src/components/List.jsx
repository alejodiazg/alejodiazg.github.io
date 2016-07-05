var React = require('react');
var ListItem = require('./ListItem.jsx');
var Icon = require('./Icon.jsx');

var ingredients = [
  {"id": 1 , "text" : "ham"} ,
  {"id": 2 , "text" : "cheese"} ,
  {"id": 3 , "text" : "bread"}
]

var List = React.createClass({

  render: function(){
    var listItems = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} />
    });

    return(
      <div>
        <ul style={{backgroundColor : "red"}}>
          {listItems}
        </ul>
        <div className="container">
          <div className="row">
            <Icon classes="fa fa-camera-retro fa-lg" background="bluecorn"/>
            <Icon classes="fa fa-camera-retro fa-2x" color="blue" hoverColor="red"/>
            <Icon classes="fa fa-user-plus fa-5x" color="red"/>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = List;
