import { useState, useEffect, useContext } from "react";

import NavLink from "../navigation-link/navigation-link.component";
import Lines from '../../assets/lines.png'
import { NavContext } from "../../contexts/navigation-bar.context";

import './navigation-bar.styles.scss'
import logo from '../../assets/logo-transparent.png'

const NavigationBar = () => {

    const [active, setActive] = useState(false);
    const { currentRoute } = useContext(NavContext);
    
    const LINKS = [
        {linkPath: '/', title: 'HOME'},
        {linkPath: '/projects', title: 'PROJECTS'},
        {linkPath: '/about', title: 'ABOUT ME'},
        //{linkPath: '/resume', title: 'RESUME'},
        {linkPath: '/contact', title: 'CONTACT ME'},
    ]

    const [displayNavBar, setDisplayNavBar] = useState(true);

    function vh(percent) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (percent * h) / 100;
    }

    useEffect(() => {
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
            const distanceFromTop = clientY/window.innerHeight;
            if(distanceFromTop <= 0.15){
                setDisplayNavBar(true);
            }
    
            else if(window.pageYOffset > 50){
                setDisplayNavBar(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove',handleMouseMove);
        };
    }, []);

    useEffect(() => {
        setActive(false);
    }, [currentRoute])

    const onClickHandler = () =>{
        setActive(!active);
    }

    return(
        <div>
            <div className={`button-menu ${active ? 'visible' : 'invisible'}`}>
                <img src={Lines} alt='menu' onClick={onClickHandler}/>
                <div className="links">
                {
                    LINKS.map((link) => (<NavLink key={link.title} link={link}/>))
                }
                </div>
            </div>
            <div className={`navigation-bar-container ${ displayNavBar? '':'invisible-nav-bar' }`}>
                <div className="nav-bar-logo-container" style={{ backgroundImage:`url(${logo})` }}>
                </div>
                <div className="links-container">
                    {
                        LINKS.map((link) => (<NavLink key={link.title} link={link}/>))
                    }
                </div>
                <div className="links-container-mobile">
                    <img src={Lines} alt='menu' onClick={onClickHandler}/>
                </div>
            </div>
            <div className="nav-bar-placeholder">
            </div>
        </div>
    )
};

export default NavigationBar;