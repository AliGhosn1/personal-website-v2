import { Link } from "react-router-dom"
import { useState, useContext, useEffect } from "react";

import { NavContext } from "../../contexts/navigation-bar.context";

import './navigation-link.styles.scss'

const NavLink = ({link}) => {

    const {linkPath, title} = link;
    const [wrapperHover, setWrapperHover] = useState(false);
    const { currentRoute } = useContext(NavContext);
    const [ activeRoute, setActiveRoute ] = useState(false);

    useEffect(() => {
        setActiveRoute(currentRoute === linkPath);
        if(activeRoute){
            setWrapperHover(false);
        }
    }, [currentRoute, linkPath, activeRoute])


    const mouseEnterHandler = () => {
        setWrapperHover(true)
    }

    const mouseLeaveHandler = () => {
        setWrapperHover(false)
    }

    return(
        <div className="link-container">
            {activeRoute ? 
                <span className="link-wrapper">
                    <div className='link active-link'>{title}</div>
                </span>
                :
                <Link className="link-wrapper" to={linkPath} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                    <div className={`link ${wrapperHover && 'link-hover'}`}>{title}</div>
                </Link>
            }
        </div>
    )
}

export default NavLink;