var React = require('react');

class List extends React.Component {
	constructor(props) {
		super();

    this.items = props.data.map((item) => {
  		return(
  			<li key={item.name}>
  				<label><input type="checkbox" checked={item.checked} /> {item.title}</label>
  			</li>
  		);
  	});
	}

  render(props) {
	  return (
    	<ul>
      	{this.items}
    	</ul>
    );
	}
}

module.exports = List;