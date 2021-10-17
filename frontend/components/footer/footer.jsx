import React from 'react';

function Footer(){
    return(
        <div className="footer-main">
            <div className="footer-component">
                <img className="footer-logo" src={window.mainlogo} />
                <div className="general-links">
                    <h3>General Links</h3>
                    <div className="dev-links">
                        <a className="proj-link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/elsa-caballero/">LinkedIn</a>
                        <a className="proj-link" target="_blank" rel="noopener noreferrer" href="https://github.com/elsicab/wiredIn">GitHub</a>
                        <a className="proj-link" target="_blank" rel="noopener noreferrer" href="https://angel.co/u/elsa-caballero">AngelList</a>
                    </div>
                </div>
                <div className="general-links">
                    <h3>Projects</h3>
                    <div className="dev-links">
                        <a className="proj-link" target="_blank" rel="noopener noreferrer" href="https://elsicab.github.io/little-heist/">Little Heist</a>
                        <a className="proj-link" target="_blank" rel="noopener noreferrer" href="https://come-what-may.herokuapp.com/#/">Come What May</a>
                    </div>
                </div>
                <div className="technologies-used">
                    <h3>Technologies Implemented</h3>
                    <div className="technologies">
                        <div>React</div>
                        <div>Redux</div>
                        <div>JavaScript</div>
                        <div>jQuery</div>
                        <div>Rails</div>
                        <div>JBuilder</div>
                        <div>PostgreSQL</div>
                        <div>AWS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;