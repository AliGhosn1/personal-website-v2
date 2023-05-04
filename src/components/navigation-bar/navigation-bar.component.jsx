import { useState, useEffect } from "react";

import NavLink from "../navigation-link/navigation-link.component";

import './navigation-bar.styles.scss'
import logo from '../../assets/logo-transparent.png'

const NavigationBar = () => {
    
    const LINKS = [
        {linkPath: '/', title: 'HOME'},
        {linkPath: '/projects', title: 'PROJECTS'},
        {linkPath: '/about', title: 'ABOUT ME'},
        {linkPath: '/resume', title: 'RESUME'},
        {linkPath: '/contact', title: 'CONTACT ME'},
    ]
    const [displayNavBar, setDisplayNavBar] = useState(true);

    function vh(percent) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (percent * h) / 100;
    }

    const handleScroll = () => {
        const position = window.pageYOffset;

        if(position <= 50){
            setDisplayNavBar(true);
        }

        else{
            setDisplayNavBar(false);
        }
    };

    const handleMouseMove = ({clientX, clientY}) => {
        const distanceFromTop = clientY-window.pageYOffset;

        if(vh(distanceFromTop) <= 0.2){
            setDisplayNavBar(true);
        }

        else if(window.pageYOffset > 50){
            setDisplayNavBar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove',handleMouseMove);
        };
    }, []);

    return(
        <div>
            <div className={`navigation-bar-container ${ displayNavBar? '':'invisible-nav-bar' }`}>
                <div className="nav-bar-logo-container" style={{ backgroundImage:`url(${logo})` }}>
                </div>
                <div className="links-container">
                    {
                        LINKS.map((link) => (<NavLink link={link} />))
                    }
                </div>
            </div>
        </div>
    )
};

export default NavigationBar;