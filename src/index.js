var React = require('react');
var ReactDOM = require('react-dom');
var List = require("./components/List");
var DetailsPane = require("./components/DetailsPane");

var path = require('path');

var ssMods = require('./ss-mods');

var allModsDir = process.cwd() + path.sep + 'all-mods';

class App extends React.Component {

  constructor(props) {
    super(props);

    var mods = ssMods.loadModsFromDir(allModsDir);

    var allMods = {};
    mods.forEach((mod) => { allMods[mod.id] = mod });

    this.state = {
      selectedId: null,
      data: allMods
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
        <DetailsPane mod={this.state.data[this.state.selectedId]} style={detailsStyle} onClick={this.handleEnableToggle.bind(this)} />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);