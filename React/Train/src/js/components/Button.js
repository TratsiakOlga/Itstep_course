import React from 'react';

const style = {
    buttonStyles: {
        color: 'black',
        bacgroundColor: 'red'
    }
}

export default class Button extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(<button onClick={this.props.handleClick} style={style.buttonStyles}>{this.props.label}</button>);
    }
}

/*export default function Button({label, handleClick, disable={null}){
    return (<button onClick = {handleClick} disabled={disabled}>{label}</button>);
}*/