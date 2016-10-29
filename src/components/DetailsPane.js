var React = require('react');

function ModAuthorControl(props) {
  var name = '', email = '', url = '';
  if(props.name) {
    name = <span className="mod-author-name">{props.name}</span>;
  }
  if(props.email) {
    email = <a className="mod-author-email" href={'mailto:' + props.email}>{props.email}</a>;
  }
  if(props.url) {
    url = <a className="mod-author-url" href={props.url}>{props.url}</a>;
  }
  return <div className="mod-author">
    {name}
    {email}
    {url}
  </div>;
}

function ModTitleControl(props) {
  let author = '', version = '';
  if(props.author) {
    author = <ModAuthorControl name={props.author.name} email={props.author.email} url={props.author.url} />;
  }
  if(props.version) {
    version = <span className="mod-version">v{props.version}</span>;
  }
  return <section className="mod-details">
    <h1 className="mod-name">{props.title}</h1>
    {version}
    {author}
  </section>;
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
    title = <ModTitleControl title={props.mod.title} version={props.mod.version} author={props.mod.author} />;
  }
  else {
    title = <ModTitleControl title="No mod selected" />;
  }

  return (
    <article className="DetailsPane" style={props.style}>
      <header className="mod-info">
        {status}
        {title}
      </header>
      <section className="mod-readme"></section>
    </article>
  );
}

module.exports = DetailsPane;