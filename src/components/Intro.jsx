import React from 'react'
import Particles from 'react-particles-js';
import styled from 'styled-components'
import particles from '../data/particles.json'

const IntroWrapper = styled.div`
    position: relative;
    background: #b61924;
    min-height: 100vh;
    > h1 {
        position: absolute; 
        top: 1%;
        left: 5%;
        font-size: 200px; 
        color: white; 
        font-family: 'Noto Sans JP', sans-serif;
    }

    #scroll-down {
        position: absolute; 
        bottom: 40px;
        left: 50%;
        transform: translate(-50%,-50%);
        cursor: pointer;
        > h4 {
            color: white;
            letter-spacing: 1px;
            margin-bottom: 5px;
            font-weight: normal;
        }
        #chevron {
            height: 20px;
            width: 20px;
            margin: 0 auto;
            transform: rotate(45deg);
            border-right: 3px solid white;
            border-bottom: 3px solid white;
            animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
            0% {
                transform: translate(0,0) rotate(45deg);
            }
            50% {
                transform: translate(0,10px) rotate(45deg);
            }
            100% {
                transform: translate(0,0) rotate(45deg);
            }
        }
    }

    @media (max-width: 500px){
        > h1 {
            font-size: 100px;
        }
    }
`

class Intro extends React.Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        document.getElementById('tech-stack').scrollIntoView()
    }
    
    render() {
        return (
            <IntroWrapper>
                <Particles height={'100vh'} params={particles}/>
                <h1 
                data-aos="fade-up" 
                data-aos-offset="-100"
                data-aos-delay="500">
                    Hello,
                </h1>
                <div id="scroll-down" onClick={this.handleClick}>
                    <h4>SCROLL DOWN</h4>
                    <div id="chevron"></div>
                </div>
            </IntroWrapper>
        )

    }
    
}

export default Intro