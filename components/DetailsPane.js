var React = require('react');

function ModEnableControl(props) {
  let headerStyle = {
    margin: '0 0.25em'
  };
  let enableDisableStyle = {
    float: 'right'
  };
  return (
    <div>
      <h1 style={headerStyle}>{props.title}</h1>
      <div style={enableDisableStyle}>
        {props.enabled}
      </div>
    </div>
  );
}

function DetailsPane(props) {
  var title = '';
  var enabled = '';
  if(props.mod) {
    title = props.mod.title;
    enabled = props.mod.enabled;
  }

  return (
  <div style={props.style}>
    <ModEnableControl title={title} enabled={enabled} />
  </div>
  );
}

module.exports = DetailsPane;