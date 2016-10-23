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
      let className = this.state.selected[index] ? 'selected' : '';
      return(
        <li key={index} onClick={this.toggleSelected.bind(this, index, item)} className={className}>
          {item.title}
        </li>
      );
    })

    return (
      <ul className="List">
        {items}
      </ul>
    );
  }
}

module.exports = List;