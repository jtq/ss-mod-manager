var React = require('react');

var markdown = require('markdown').markdown;

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
  return <section className="mod-details" onClick={props.onClick}>
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
  let title = '', status = '', readme = '';
  if(props.mod) {
    status = <ModStatusControl enabled={props.mod.enabled} onClick={props.onToggleEnabled} />;
    title = <ModTitleControl title={props.mod.title} version={props.mod.version} author={props.mod.author} onClick={props.onClick} />;
    readme = markdown.toHTML(props.mod.readme);
  }
  else {
    title = <ModTitleControl title="No mod selected" />;
  }

  readme = { __html:readme };

  return (
    <article className="DetailsPane" style={props.style}>
      <header className="mod-info">
        {status}
        {title}
      </header>
      <section className="mod-readme" dangerouslySetInnerHTML={ readme } onClick={props.onClick}></section>
    </article>
  );
}

module.exports = DetailsPane;