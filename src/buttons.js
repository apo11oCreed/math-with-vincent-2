import React from 'react';
let addButtonText="Add";
let subtractButtonText="Subtract";

export default class MenuButtons extends React.Component {
    render() {
        return <div><button className="navigation_main col-6">{addButtonText}<br /><span className="navigation_main-icon glyphicon glyphicon-plus">+</span></button><button className="navigation_main col-6"><span>{subtractButtonText}<br /><span className="navigation_main-icon glyphicon glyphicon-minus">-</span></span></button></div>
    }
}