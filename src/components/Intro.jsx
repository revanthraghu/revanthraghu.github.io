import React from 'react'
import Particles from 'react-particles-js';
import styled from 'styled-components'
import particles from '../data/particles.json'

// Use styled-components to ensure vendor prefixes are applied automatically

const IntroWrapper = styled.div`
    position: relative;
    background: #b61924;
    min-height: 770px;

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
`

const IntroText = styled.div`
    position: absolute; 
    top: 0px;
    left: 0px;
    width: 100%;
    padding: 30px 250px 0px 80px;
    color: white;
    > h1 {
        font-size: 200px; 
        font-family: 'Righteous', cursive;
        text-align: left;
        margin-left: 90px;
    }

    #about-me {
        display: flex;
        flex-direction: row;
        width: max-content;
        align-items: center;
        margin-left: auto;

        > div:nth-child(1) {
            align-self: end;
        }

        > div:nth-child(2) {
            display: flex;
            flex-direction: column;
        }

        > div > h2 {
            font-size: 70px;
            font-weight: 500;
            font-family: 'Roboto', sans-serif;
            text-align: right;
            margin-bottom: 20px;
                > span {
                    font-size: 50px;
                }
        }

        div > p {
            width: 570px;
            text-align: justify;
            font-family: 'Roboto', sans-serif;
            line-height: '10px';
            font-weight: 400;
            font-size: 22px;
        }
    }

    @media (max-width: 1200px) {
        top: 20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 0px;
        width: max-content;
        > h1 {
            font-size: 120px;
            text-align: left;
            width: max-content;
            margin-left: 0;
        }
        #about-me {
            flex-direction: row; 
            justify-content: center;
            align-items: center;
            width: 100%;

            > div:nth-child(1) {
                div {
                    margin: 0 auto;
                }
            }

            > div:nth-child(2) {
                display: flex;
                flex-direction: column;
            }

            > div > h2 {
                font-size: 40px;
                text-align: center;
                margin-top: 20px;
                    > span {
                        font-size: 22px;
                    }
            }

            div > p {
                width: 500px;
                padding: 0 30px;
                font-size: 20px;
                text-align: justify;
            }
        }
    }
    
    @media (max-width: 575px) {
        top: 20px;
        left: 0;
        right: 0;
        margin: 0 auto;
        padding: 0px;
        width: max-content;
        > h1 {
            font-size: 100px;
            margin: 0 auto;
            width: max-content;
        }
        #about-me {
            flex-direction: column; 
            justify-content: center;
            width: 100%;
            align-items: center;

            > div:nth-child(1) {
                align-self: center;
                div {
                    margin: 0 auto;
                }
            }

            > div:nth-child(2) {
                display: flex;
                flex-direction: column;
            }

            > div > h2 {
                font-size: 40px;
                text-align: center;
                margin-top: 20px;
                    > span {
                        font-size: 22px;
                    }
            }

            div > p {
                width: 100vw;
                padding: 0 30px;
                font-size: 20px;
                text-align: center;
            }
        }
    }
`

const ImageWrapper = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 3px solid #b61924;
    overflow: hidden;
    position: relative;
    margin-right: 40px;
    img {
        width: 155px;
        height: 155px;
        display: block;
        position: absolute;
        object-fit: cover;
        object-position: -3px;
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
                <Particles height={'770px'} params={particles}/>
                <IntroText>
                    <h1 
                    data-aos="fade-up" 
                    data-aos-offset="-100"
                    data-aos-delay="500">
                        Hello,
                    </h1>
                    <div id="about-me">
                        <div 
                        data-aos="fade-right" 
                        data-aos-offset="-100"
                        data-aos-delay="500"
                        >
                            <ImageWrapper>
                                <img src="dp2.jpg" alt="A geeky guy" />
                            </ImageWrapper>
                        </div>
                        <div
                        data-aos="fade-down" 
                        data-aos-offset="-100"
                        data-aos-delay="500"                        
                        >
                            <h2>
                                <span>I'm</span> Revanth Raghu.
                            </h2>
                            <p>
                                An aspiring full stack developer 
                                proficient in MERN stack. 
                                If you are looking for a curious and adaptible 
                                team player. Then, I'm the man for the job.
                            </p>
                        </div>
                    </div>
                </IntroText>
                    <div id="scroll-down" onClick={this.handleClick}>
                        <h4>SCROLL DOWN</h4>
                        <div id="chevron"></div>
                    </div>
            </IntroWrapper>
        )

    }
    
}

export default Intro