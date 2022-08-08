import React from 'react';
function Resume () {
    return (
        <div>
            <div>
                <p>Resume</p>

                <a href="">
                <span className='icon'>
                    <i></i>
                </span>
                <span>Download my Resume!</span>
                </a>
            </div>
            <div>
                <p>Skills:</p>
                <ul>
                    <li>JavaScript, HTML, CSS, Markdown</li>
                    <li>Node.js, MYSQL, MongoDB, React</li>
                    <li>Git, GitHub</li>
                </ul>
            </div>
        </div>
    );
}
export default Resume;