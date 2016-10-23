var React = require('react');

class List extends React.Component {
	constructor(props) {
		super(props);

    this.state = {
    	items: props.data,
      selected: []
    };

	}

  toggleSelected(index, event) {
    var selected = this.state.selected;
    selected[index] = !selected[index];
    this.setState({
      selected: selected
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
        <li key={index}>
          <label><input type="checkbox" defaultChecked={this.state.selected[index]} onChange={this.toggleSelected.bind(this, index, item)} />{item.title}</label>
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