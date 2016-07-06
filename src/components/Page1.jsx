var React = require('react');

var Page1 = React.createClass({
  render: function(){
    return(
      <div className="app-content app-content-hor">
        <div className="app-sidebar">
          <div>
            <div>
              Siguiente
            </div>
            <div>
              Previous
            </div>
            <div>
              Current
            </div>
            <div>
              Next
            </div>
            <div>
              Anterior
            </div>
          </div>
        </div>
        <div className="app-content-content"> Ridicoulus class name </div>
      </div>
    );
  }
});

module.exports = Page1;
