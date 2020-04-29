// Code SimplerComponent Here

import React from 'react'


const SimplerComponent = (props) => {
    console.log(props)
    return <div onClick={props.handleClick}>I am just happy</div>

}



export default SimplerComponent

