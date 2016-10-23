var React = require('react');
var ReactDOM = require('react-dom');
var List = require("./components/List");


class App extends React.Component {
  render() {
    var data = [
      { title:'Mod 1', id:'mod1' },
      { title:'Mod 2', id:'mod2' },
      { title:'Mod 3', id:'mod3' }
    ];
    return (
      <List data={data} />
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);