var React = require('react');
var ReactDOM = require('react-dom');
var List = require("./components/List");


class App extends React.Component {
  render() {
    var data = [
      { title:'Mod 1', checked:false, id:'mod1' },
      { title:'Mod 2', checked:true, id:'mod2' },
      { title:'Mod 3', checked:false, id:'mod3' }
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