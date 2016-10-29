var React = require('react');

class List extends React.Component {
  render() {
    var items = Object.keys(this.props.data).map((itemId) => {
      let item = this.props.data[itemId];
      let selectedState = this.props.selected === item.id ? 'selected' : '';
      let enabledState = item.enabled ? 'enabled' : '';
      return(
        <li key={item.id} onClick={this.props.onClick.bind(this, item.id, item)} className={selectedState}>
          <span className={'enabled-icon ' + enabledState}></span>
          {item.title}
        </li>
      );
    })

    return (
      <ul className="List" style={this.props.style}>
        {items}
      </ul>
    );
  }
}

module.exports = List;