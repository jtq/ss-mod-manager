var React = require('react');

class List extends React.Component {
  render() {
    var items = Object.keys(this.props.data).map((itemId) => {
      let item = this.props.data[itemId];
      let className = this.props.selected === item.id ? 'selected' : '';
      return(
        <li key={item.id} onClick={this.props.onClick.bind(this, item.id, item)} className={className}>
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