import { Component } from "react";
export default class Screen extends Component{

    render(){
        return(
            <div className='calcDisplay outputScreen'>
                <div className='formulaScreen'>{this.props.equation}</div>
                <div id="display">{this.props.entered}</div>
            </div>
        )
    }
}