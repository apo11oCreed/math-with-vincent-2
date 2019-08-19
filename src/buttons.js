import React from 'react';
const buttonStyle = {
  fontSize: '40'
};

class MenuButtons extends React.Component{
	render() {
		return <div><button><span style={buttonStyle}>Adding</span></button><button><span style={buttonStyle}>Subtracting</span></button></div>
	}
}

export default MenuButtons;