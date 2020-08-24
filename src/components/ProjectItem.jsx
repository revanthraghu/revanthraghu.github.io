import React from 'react'

function ProjectItem() {
    return (
        <div>
            <a  target="_blank" rel="noopener noreferrer"
            href="https://my-firstwebsite.netlify.app/">
                <img style={{width: '100%', height: '200px', display: 'block'}} src="/first.jpg" alt="my first project" />
                <h4>My First Website</h4>
            </a>
            <p>
                This was the first site I built. 
                It has a lot of bad UI and design bugs, 
                but this project reminds me of where I started
                and how much I have progressed.
            </p>
        </div>
    )
}

export default ProjectItem