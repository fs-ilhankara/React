import React, { Component } from 'react'
import './CounterStyle.css'

export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            name : "Ali",
            count : 0,
        };
        console.log("constructor");
    };

    increase = () => {
        this.setState({count:this.state.count + 1})
    }
    
    decrease = () => {
        this.setState({count:this.state.count - 1})
    }

    reset = () => {
        this.setState({count:0})
    }

    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps",state)
        
        return null
    }

    shouldComponentUpdate(){
        console.log("Sould Update?")
        return true
    }

    componentDidMount = () => {
        console.log("component mounted")
        console.log("----------------")
    }

    componentDidUpdate = () =>{
        console.log("Updated")
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("snapshot",prevstate)
        return null
    }

    componentWillUnmount(){
        console.log("will unmount Bye")
    }

    render() {
        console.log("render")
        return (
            <div className="container">
                <p>Counter: {this.state.count}</p>
                <button onClick={()=> this.increase()}>ARTTIR</button>
                <button onClick={()=> this.decrease()}>AZALT</button>
                <button onClick={()=> this.reset()}>RESET</button>
                <button onClick={()=> this.componentWillUnmount()}>QUIT</button>
            </div>
        )
    }
}
