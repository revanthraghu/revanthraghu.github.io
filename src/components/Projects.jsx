import React from 'react'
import styled from 'styled-components'
import ProjectItem from './ProjectItem'

const ProjectsGrid = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    width: max-content;
    margin: 50px auto;
    grid-column-gap: 50px;
    grid-auto-rows: 320px;

    @media (max-width: 733px) {
        grid-template-columns: repeat(1, 320px);
        grid-row-gap: 35px;
    }
    @media (min-width: 734px) {
        grid-template-columns: repeat(2, 320px);
        grid-row-gap: 40px;
    }
    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 320px);
        grid-column-gap: 80px;
        grid-row-gap: 40px;
    }
`

const Heading = styled.h1`
    text-align: center;
    margin-top: 60px;
`

function Projects() {
    return (
        <React.Fragment>
            <Heading>Projects</Heading>
            <ProjectsGrid id="projects">
                <ProjectItem />
                <div>
                    <a target="_blank" rel="noopener noreferrer" style={{width: '100%'}} href="https://purehangman.netlify.app/">
                        <img style={{width: '100%', height: '200px', display: 'block'}} src="/hangman.png" alt="my first project" />
                        <h4>Hangman</h4>
                    </a>
                    <p>
                        This was the first site I built. 
                        It has a lot of bad UI and design bugs, 
                        but this project reminds me of where I started
                        and how much I have progressed.
                    </p>
                </div>
                <div>
                    <a target="_blank" rel="noopener noreferrer" style={{width: '100%'}} href="https://omdbsearch.netlify.app/">
                        <img style={{width: '100%', height: '200px', display: 'block'}} src="/omdb_search.png" alt="my first project" />
                        <h4>OMDB Search</h4>
                    </a>
                    <p>
                        This was the first site I built. 
                        It has a lot of bad UI and design bugs, 
                        but this project reminds me of where I started
                        and how much I have progressed.
                    </p>
                </div>
                <div>
                    <a target="_blank" rel="noopener noreferrer" style={{width: '100%'}} href="https://paper-tic-tac-toe.netlify.app/">
                        <img style={{width: '100%', height: '200px', display: 'block'}} src="/tic_tac_toe.png" alt="my first project" />
                        <h4>Tic Tac Toe</h4>
                    </a>
                    <p>
                        This was the first site I built. 
                        It has a lot of bad UI and design bugs, 
                        but this project reminds me of where I started
                        and how much I have progressed.
                    </p>
                </div>
                <div>
                    <a target="_blank" rel="noopener noreferrer" style={{width: '100%'}} href="https://timer-stopwatch.netlify.app/">
                        <img style={{width: '100%', height: '200px', display: 'block'}} src="/timer.png" alt="my first project" />
                        <h4>Timer and Stopwatch</h4>
                    </a>
                    <p>
                        This was the first site I built. 
                        It has a lot of bad UI and design bugs, 
                        but this project reminds me of where I started
                        and how much I have progressed.
                    </p>
                </div>
                <div>
                    <a target="_blank" rel="noopener noreferrer" style={{width: '100%'}} href="https://app-todo-react.netlify.app">
                        <img style={{width: '100%', height: '200px', display: 'block'}} src="/todo.jpg" alt="my first project" />
                        <h4>To-Do App</h4>
                    </a>
                    <p>
                        This was the first site I built. 
                        It has a lot of bad UI and design bugs, 
                        but this project reminds me of where I started
                        and how much I have progressed.
                    </p>
                </div>
                <div>
                    <a target="_blank" rel="noopener noreferrer" style={{width: '100%'}} href="https://partake-clone.netlify.app/">
                        <img style={{width: '100%', height: '200px', display: 'block', objectFit: 'cover'}} src="/partake.jpg" alt="e-commerce website clone" />
                        <h4>e-Commerce Website Clone</h4>
                    </a>
                    <p>
                        This was the first site I built. 
                        It has a lot of bad UI and design bugs, 
                        but this project reminds me of where I started
                        and how much I have progressed.
                    </p>
                </div>
                <div>
                    <a target="_blank" rel="noopener noreferrer" style={{width: '100%'}} href="https://oneweather.netlify.app/">
                        <img style={{width: '100%', height: '200px', display: 'block', objectFit: 'cover'}} src="/oneweather.png" alt="e-commerce website clone" />
                        <h4>One Weather</h4>
                    </a>
                    <p>
                        This was the first site I built. 
                        It has a lot of bad UI and design bugs, 
                        but this project reminds me of where I started
                        and how much I have progressed.
                    </p>
                </div>
            </ProjectsGrid>
        </React.Fragment>
    )
}

export default Projects