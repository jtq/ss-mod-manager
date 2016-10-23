var React = require('react');
var ReactDOM = require('react-dom');
var List = require("./components/List");
var DetailsPane = require("./components/DetailsPane");


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedId: null,
      data: {
        mod1: { title:'Mod 1', id:'mod1', enabled:false },
        mod2: { title:'Mod 2', id:'mod2', enabled:false },
        mod3: { title:'Mod 3', id:'mod3', enabled:false }
      }
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
        <DetailsPane mod={this.state.data[this.state.selectedId]} style={detailsStyle} />
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);