import React from 'react';

class MenuButtons extends React.Component {
    render() {
        return <div><button class="navigation_main col-6">Add<br /><span class="navigation_main-icon">+</span></button><button class="navigation_main col-6"><span>Subtract<br /><span class="navigation_main-icon">-</span></span></button></div>
    }
}

export default MenuButtons;