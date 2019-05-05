import React from 'react';

//props
//state
//children

var divStyle = {
    overflowY: 'scroll',
    overflowX: 'hidden',
    padding: '10px',
    border: '1px solid',
    borderColor: '#e9cfb0',
    borderRadius: '5px',
    height: '500px'
}

const Scroll = (props) => {
    return (
        <div style={divStyle} >
            {props.children}
        </div>

    );
}


export default Scroll;