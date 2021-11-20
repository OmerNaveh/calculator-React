import { Component } from "react";
export default class Button extends Component{
    render(){
        return(
            <>
                <button id = {this.props.id} 
                onClick={()=>{this.props.onClick(this.props.value)}}>
                    {this.props.value}
                </button>
            </>
        )
    }
}