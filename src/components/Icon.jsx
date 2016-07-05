var React = require('react');

var Icon = React.createClass({
  getInitialState: function(){
    var iconStyle = {}
    
    if(this.props.color){
      iconStyle.color = this.props.color;
    };
    if(this.props.borderRadius){
      iconStyle.borderRadius = borderRadius
    };
    if(this.props.background){
      iconStyle.background = this.props.background;
      console.log("it has background!!!!");
    };

    var iconHoverStyle = {};

    if(this.props.hoverColor){
      iconHoverStyle.color = this.props.hoverColor;
    }

    if(this.props.hoverBackgroundColor){
      iconHoverStyle.background = this.props.hoverColor
    }

    return {iconStyle: iconStyle , hover: false , iconHoverStyle : iconHoverStyle}
  },

  onMouseEnterHandler: function() {
      this.setState({
          hover: true
      });
  },
  onMouseLeaveHandler: function() {
      this.setState({
          hover: false
      });
  },
  render: function(){
    var currentStyle = this.state.iconStyle;
    if(this.state.hover){
      currentStyle = this.state.iconHoverStyle;
    }
    return (
      <i style={currentStyle} onMouseEnter={this.onMouseEnterHandler}
        onMouseLeave={this.onMouseLeaveHandler} className={this.props.classes}></i>
    )
  }
});

/*
var Icon = React.createClass({
    getInitialState: function() {
        return {
            hover: false
        };
    },
    onMouseEnterHandler: function() {
        this.setState({
            hover: true
        });
        console.log('enter');
    },
    onMouseLeaveHandler: function() {
        this.setState({
            hover: false
        });
        console.log('leave');
    },
    render: function() {
        var inner = normal;
        if(this.state.hover) {
            inner = hover;
        }

        return (
            <div style={outer}>
                <div style={inner}
                    onMouseEnter={this.onMouseEnterHandler}
                    onMouseLeave={this.onMouseLeaveHandler} >
                    {this.props.children}
                </div>
            </div>
        );
    }
});

var outer = {
    height: '120px',
    width: '200px',
    margin: '100px',
    backgroundColor: 'green',
    cursor: 'pointer',
    position: 'relative'
}

var normal = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    opacity: 0
}

var hover = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    opacity: 1
}
*/
module.exports = Icon;
