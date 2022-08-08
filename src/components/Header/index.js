import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Resume from '../Resume';

function Header () {
    const [currentPage, handlePageChange] = useState('About');
    const pageLoad = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;
            default:
                return <About />;
        }
    };
    return (
        <div>
            <nav>
                <div>
                    <a href='https://github.com/cmc496?tab=repositories'>Caitlin Clifford</a>
                </div>
            </nav>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <main>
                <div>{pageLoad(currentPage)}</div>
            </main>
        </div>
    );
}
export default Header;