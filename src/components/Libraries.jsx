import React from 'react'
import styled from 'styled-components'

const Icons = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    width: max-content;
    margin: auto;
    grid-row-gap: 30px;

    @media (max-width: 575px) {
        grid-template-columns: repeat(4, 60px);
        grid-template-rows: 60px 60px;
        grid-column-gap: 30px;
    }

    @media (min-width: 576px) {
        grid-template-columns: repeat(4, 65px);
        grid-template-rows: 65px 65px;
        grid-column-gap: 35px;
    }

    @media (min-width: 700px) {
        grid-template-columns: repeat(4, 65px);
        grid-template-rows: 65px 65px;
        grid-column-gap: 60px;
    }

    @media (min-width: 1000px) {
        grid-template-columns: repeat(4, 75px);
        grid-template-rows: 75px 75px;
        grid-column-gap: 60px;
        
        div {
            height: 75px;
            width: 75px;
        }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div > img {
        width: 100%;
        height: auto;
    }
`

function Libraries() {
    return (
        <Icons>
            <div>
                <img src="html5.svg" alt="" />
            </div>
            <div>
                <img style={{transform: 'scale(1.25)'}} src="css3.svg" alt="" />
            </div>
            <div>
                <img src="js.svg" alt="" />
            </div>
            <div>
                <img src="bootstrap.png" alt="" />
            </div>
            <div>
                <img style={{transform: 'scale(1.1)'}} src="react.svg" alt="" />
            </div>
            <div>
                <img src="mongodb.svg" alt="" />
            </div>
            <div>
                <img src="expressjs.svg" alt="" />
            </div>
            <div>
                <img src="nodejs.svg" alt="" />
            </div>
        </Icons>
    )
}

export default Libraries