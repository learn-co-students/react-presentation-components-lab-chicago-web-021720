import React from 'react'

class SimpleComponent extends React.Component {
    constructor() {
        super()
        
        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            if(prevState.mood === "happy") {
                return {mood: "sad"}
            } else {
                return {mood: "happy"}
            }
        })
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }
}

export default SimpleComponent