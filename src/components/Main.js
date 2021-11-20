import {Component} from "react";
import Button from "./Button";
import Screen from "./Screen";
import Mexp from "math-expression-evaluator"; //calculates math expressions from string
 export default class Main extends Component{
     constructor(props){
         super(props)
         this.state = {entered: 0, equation:''}
     }
     clearScreen= ()=>{
        this.setState((prevState) => ({ entered: 0 , equation:'' }));
    }
    numbersClicked = (number)=>{
        if(this.state.entered === 0 ||this.state.entered ==='+' 
        ||this.state.entered ==='-' || this.state.entered ==='*' || this.state.entered ==='/' ||
        this.state.entered ==='='){
            if(this.state.equation === null){
                this.setState({entered:number})
                this.setState({equation: number})
            }
            else{
                this.setState({entered:number})
                this.setState({equation: this.state.equation +number})
            }
        }
        else{
            this.setState({entered: this.state.entered+number})
            this.setState({equation : this.state.equation + number})
        }
    }
    add = ()=>{
        const currentVal = this.state.equation;
        this.setState({entered:'+', equation:currentVal + "+"})
    }
    subtract = ()=>{
        const currentVal = this.state.equation;
        this.setState({entered:'-', equation:currentVal + "-"})
    }
    multiply = ()=>{
        const currentVal = this.state.equation;
        this.setState({entered:'*', equation:currentVal + "*"})
    }
    divide = ()=>{
        const currentVal = this.state.equation;
        this.setState({entered:'/', equation:currentVal + "/"})
    }
    decimal = ()=>{
        if(String(this.state.entered).includes('.')) return // avoid multiple decimals
        const currentVal = this.state.equation;
        this.setState({entered: `${this.state.entered}.`, equation:currentVal + "."})
    }
    equals=()=>{
        try{
            const equationResult = Mexp.eval(this.state.equation);
            this.setState({equation:this.state.equation + '=' + equationResult, entered:equationResult })
        }
        catch{
            return
        }
    }
     render(){
         return(
             <div className='calculator'>
                 <Screen equation ={this.state.equation} entered = {this.state.entered}/>
                <div>
                    <Button className='jumbo ac' value ="AC" id="clear" onClick ={this.clearScreen} />
                    <Button  value ="/" id="divide" onClick ={this.divide} />
                    <Button  value ="*" id="multiply" onClick ={this.multiply} />
                </div>
                <div>
                    <Button  value ="7" id="seven" onClick ={this.numbersClicked} />
                    <Button  value ="8" id="eight" onClick ={this.numbersClicked} />
                    <Button  value ="9" id="nine" onClick ={this.numbersClicked} />
                    <Button  value ="-" id="subtract" onClick ={this.subtract} />
                </div>
                <div>
                    <Button  value ="4" id="four" onClick ={this.numbersClicked} />
                    <Button  value ="5" id="five" onClick ={this.numbersClicked} />
                    <Button  value ="6" id="six" onClick ={this.numbersClicked} />
                    <Button  value ="+" id="add" onClick ={this.add} />
                </div>
                <div>
                    <Button  value ="1" id="one" onClick ={this.numbersClicked} />
                    <Button  value ="2" id="two" onClick ={this.numbersClicked} />
                    <Button  value ="3" id="three" onClick ={this.numbersClicked} />
                    <Button className='jumboH' value ="=" id="equals" onClick ={this.equals} />
                    <Button className='jumbo' value ="0" id="zero" onClick ={this.numbersClicked} />
                    <Button  value ="." id="decimal" onClick ={this.decimal} />
                </div>
             </div>
         )
     }
 }