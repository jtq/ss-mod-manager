var React = require('react');
var ReactDOM = require('react-dom');
var List = require("./components/List");
var DetailsPane = require("./components/DetailsPane");

var NwGui = require('nw.gui');

var path = require('path');

var ssMods = require('./ss-mods');

var allModsDir = process.cwd() + path.sep + 'all-mods';
var enabledModsDir = process.cwd() + path.sep + 'addon';

class App extends React.Component {

  constructor(props) {
    super(props);

    var enabledModNames = ssMods.getModsInDir(enabledModsDir);
    var allModsList = ssMods.loadModsFromDir(allModsDir);

    var allModsMap = {};
    allModsList.forEach((mod) => {
      if(enabledModNames.includes(mod.id)) {
        mod.enabled = true;
      }
      allModsMap[mod.id] = mod;
    });

    this.state = {
      selectedId: null,
      data: allModsMap,
      gui: NwGui
    };
  }

  getModById(id) {
    return this.state.data[this.state.selectedId];
  }

  handleSelection(id, item) {
    this.setState({
      selectedId: id
    });
  }

  handleEnableToggle() {
    var items = this.state.data;
    items[this.state.selectedId].enabled = !items[this.state.selectedId].enabled;
    this.setState({
      data: items
    });
  }

  render() {

    let containerStyle = {
      position: 'absolute',
      height:'100%',
      width:'100%' 
    };
    let modListStyle = {
      width: '25%',
      height: '100%',
      float: 'left'
    };
    let detailsStyle = {
      width: '75%',
      height: '100%',
      float: 'right'
    };

    return (
      <div style={containerStyle}>
        <List data={this.state.data} selected={this.state.selectedId} onClick={this.handleSelection.bind(this)} style={modListStyle} />
        <DetailsPane mod={this.state.data[this.state.selectedId]} gui={this.state.gui} style={detailsStyle} onClick={hijackLink} onToggleEnabled={this.handleEnableToggle.bind(this)} />
      </div>
    );
  }
}

function hijackLink(e) {
  var clickedElement = e.target;
  if(clickedElement.tagName.toUpperCase() === 'A') {
    var href = clickedElement.href;
    if(!href.match(/^chrome\-extension\:\/\//)) { // If not an internal link into this page
      e.preventDefault();
      NwGui.Shell.openExternal(href);
    }
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);