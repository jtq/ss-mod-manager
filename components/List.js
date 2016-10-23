var React = require('react');

class List extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
    	items: props.data
    };

	}

  toggleEnabled(index, event) {
    var items = this.state.items;
    items[index].selected = !items[index].selected;
    this.setState({
      items: items
    });
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    console.log("Rendered");

    var items = this.state.items.map((item, index) => {
      return(
        <li key={item.id}>
          <label><input type="checkbox" defaultChecked={item.checked} onChange={this.toggleEnabled.bind(this, index)} />{item.title}</label>
        </li>
      );
    })

    return (
      <ul>
        {items}
      </ul>
    );
  }
}

module.exports = List;