import React from 'react';
//import ReactDOM from 'react-dom';
let addButtonText="Add";
let subtractButtonText="Subtract";
//let menuButton=document.getElementsByTagName('button')[0];

export default class MenuButtons extends React.Component {
    //constructor(props) {
    //    super(props);
        //this.changeChallengeWindow = this.changeChallengeWindow.bind(this);
    //}

    //componentDidMount = () => {
    //    console.log(this.ref.innerHTML)
    //    console.log(ReactDOM.findDOMNode(this).innerHTML)
    //}

    //changeChallengeWindow = () => {
     //   if (menuButton.innerHTML==="Add"){
     //       alert("Adding");
     //   } else {
     //       alert(menuButton.innerHTML);
     //   }
    //}

    render() {
        return <div><button className="navigation_main col-6" onClick={this.changeChallengeWindow}>{addButtonText}<br /><span className="navigation_main-icon glyphicon glyphicon-plus">+</span></button><button className="navigation_main col-6" onClick={this.changeChallengeWindow}><span>{subtractButtonText}<br /><span className="navigation_main-icon glyphicon glyphicon-minus">-</span></span></button></div>
    }
}