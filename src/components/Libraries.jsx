import React from 'react'
import styled from 'styled-components'

const Icons = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    width: max-content;
    margin: auto;
    grid-row-gap: 30px;
    grid-template-columns: repeat(4, 60px);
    grid-template-rows: 92px 92px;

    figure {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    figure img {
        width: 60px;
        height: 60px;
        margin: auto;
    }
    figcaption {
        line-height: 2rem;
        letter-spacing: 1px;
        font-weight: bold;
        font-size: small;
        font-family: 'Alata', sans-serif;
    }

    @media (max-width: 575px) {
        grid-column-gap: 30px;
        figcaption {
            font-size: x-small;
        }
    }

    @media (min-width: 576px) {
        grid-column-gap: 35px;
    }

    @media (min-width: 700px) {
        grid-column-gap: 60px;
    }

    @media (min-width: 1000px) {
        grid-column-gap: 60px;
    }

`

function Libraries() {
    return (
        <Icons>
            <figure>
                <img src="html5.svg" alt="" />
                <figcaption>HTML5</figcaption>
            </figure>            
            <figure>
                <img style={{transform: 'scale(1.25)'}} src="css3.svg" alt="" />
                <figcaption>CSS3</figcaption>
            </figure>            
            <figure>
                <img src="js.svg" alt="" />
                <figcaption>JAVASCRIPT</figcaption>
            </figure>
            <figure>
                <img src="bootstrap.png" alt="" />
                <figcaption>BOOTSTRAP</figcaption>
            </figure>
            <figure>
                    <img src="mongodb.svg" alt="" />
                    <figcaption>MONGODB</figcaption>
            </figure>            
            <figure>
                    <img src="expressjs.svg" alt="" />
                    <figcaption>EXPRESS</figcaption>
            </figure>
            <figure>
                <img style={{transform: 'scale(1.15)'}} src="react.svg" alt="" />
                <figcaption>REACT</figcaption>
            </figure>
            <figure>
                <img src="nodejs.svg" alt="" />
                <figcaption>NODE.JS</figcaption>
            </figure>
        </Icons>
    )
}

export default Libraries