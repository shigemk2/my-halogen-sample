var React = require('react');
var Loader = require('halogen/PulseLoader');
var Example = React.createClass({
  render: function() {
    return (
      <Loader color="#26A65B" size="16px" margin="4px"/>
    );
  }
});

React.render(
  <Example />,
  document.getElementById('content')
);
