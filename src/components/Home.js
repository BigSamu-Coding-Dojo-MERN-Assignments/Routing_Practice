import React from 'react'

const Home = (props) => {

    //-----------------------------------
    // I) PROP, STATE AND AUX VARIABLES
    // ----------------------------------
    
    const {wordOrNumber, fontColor, backgroundColor} = props;
    //-----------------------------------
    // III) JSX
    //-----------------------------------

    return (
        <div>
            
            {
            (!wordOrNumber) 
                ? <p> Welcome!!! </p> 
                : (!isNaN(wordOrNumber))
                    ? <p> The number is: {wordOrNumber} </p>
                    : (fontColor || backgroundColor)
                        ? <p style = {{color: fontColor, backgroundColor: backgroundColor }}> The word is: {wordOrNumber} </p>
                        : <p> The word is: {wordOrNumber} </p> 
            }
        </div>
    )
}

export default Home
