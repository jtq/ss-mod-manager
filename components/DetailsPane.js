var React = require('react');

function ModTitleControl(props) {
  return <h1 className="mod-name">{props.title}</h1>;
}

function ModStatusControl(props) {
  let enabledState = props.enabled ? 'enabled' : '';
  return (
    <div className="mod-toggle">
      <div className={'toggle-container ' + enabledState} onClick={props.onClick}>
        <div className="toggle-thumb">
        </div>
      </div>
    </div>
  );
}

function DetailsPane(props) {
  let title = '', status = '';
  if(props.mod) {
    status = <ModStatusControl enabled={props.mod.enabled} onClick={props.onClick} />;
    title = <ModTitleControl title={props.mod.title} />;
  }
  else {
    title = <ModTitleControl title="No mod selected" />;
  }

  return (
    <div style={props.style}>
      {status}
      {title}
    </div>
  );
}

module.exports = DetailsPane;