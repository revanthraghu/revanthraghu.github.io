import React from 'react'
import styled from 'styled-components'

const MainWrapper = styled.section`
    max-width: 800px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 1.7rem;
    padding: 20px;
    margin-bottom: 40px;

    h1 {
        font-size: 33px;
        font-weight: bold;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #707070;
        margin: 30px 0px 15px 0px;
    }

    h2 {
        font-size: 19px;
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #707070;
    }

    p {
        max-width: 550px;
        text-align: center;
        color: #909090;
        font-family: 'Roboto';
        font-size: 18px;
    }
`
const ImageWrapper = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 3px solid gray;
    overflow: hidden;
    position: relative;
    img {
        width: 400px;
        height: 400px;
        display: block;
        position: absolute;
        object-fit: cover;
        object-position: -150px;
    }
`

const Contact = styled.div`
    display: flex;
    width: 100%;
    padding: 30px 0px;
    justify-content: center;
    align-items: center;
    color: #909090;
    flex-direction: row;
    max-width: 700px;
    min-width: 300px;
    flex-wrap: wrap;

    div {
        margin-right: 20px;
        margin-left: 20px;
        font-family: 'sans-serif';
        font-size: 18px;
    }

    div > i {
        color: #707070;
        margin-right: 15px;
    }
`

function Intro() {
    return (
        <MainWrapper>
            <ImageWrapper>
                <img src="dp2.jpg" alt="" />
            </ImageWrapper>
            <h1>Revanth Raghu</h1>
            <h2>Full Stack Developer</h2>
            <Contact>
                <div>
                    <i className="fas fa-map-marker-alt"></i>
                    Bangalore, India
                </div>
                <div>
                    <i className="fas fa-phone-alt"></i>
                    +91 9148115695
                </div>
                <div>
                    <i className="fas fa-envelope"></i>
                    revabob@gmail.com
                </div>
            </Contact>
            <p>
                Hi, I am a web developer proficient in 
                both front-end and back-end 
                technologies and love what I do. 
                Take a look at the tech stack I have 
                worked with and the projects I have worked on.
                If you like what you see and want to hire me, 
                call me or dop an email.
            </p>
        </MainWrapper>
    )
}

export default Intro