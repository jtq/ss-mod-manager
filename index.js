var React = require('react');
var ReactDOM = require('react-dom');
var List = require("./components/List");


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedId: null,
      data: {
        mod1: { title:'Mod 1', id:'mod1' },
        mod2: { title:'Mod 2', id:'mod2' },
        mod3: { title:'Mod 3', id:'mod3' }
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
    return (
      <List data={this.state.data} selected={this.state.selectedId} onClick={this.handleSelection.bind(this)} />
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);