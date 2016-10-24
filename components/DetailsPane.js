var React = require('react');

function ModEnableControl(props) {
  let enabledState = props.enabled ? 'enabled' : '';
  return (
    <div>
      <div className="mod-toggle">
        <div className={'toggle-container ' + enabledState} onClick={props.onClick}>
          <div className="toggle-thumb">
          </div>
        </div>
      </div>
      <h1 className="mod-name">{props.title}</h1>
    </div>
  );
}

function DetailsPane(props) {
  var title = '';
  var enabled = '';
  let content = '';
  if(props.mod) {
    title = props.mod.title;
    enabled = props.mod.enabled;
    content = <ModEnableControl title={title} enabled={enabled} onClick={props.onClick} />;
  }
  else {
    content = <em>Please select a mod</em>;
  }

  return (
    <div style={props.style}>
      {content}
    </div>
  );
}

module.exports = DetailsPane;