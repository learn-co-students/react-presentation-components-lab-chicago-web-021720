// Code SimpleComponent Here

import React from 'react'

export default class SimplerComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            mood: "happy"
        }
    }

    handleClick(){

        if (this.state.mood === "happy"){
            this.setState(prevState=> ({
                mood: "sad" 
            }))
        } else {
            this.setState(prevState=> ({
                mood: "happy" 
            }))
        }



        

    }
    render(){
        return<div onClick={this.handleClick.bind(this)}>{this.state.mood}</div>

    }
}