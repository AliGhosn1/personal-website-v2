import { Link } from "react-router-dom"
import { useState } from "react";

import './navigation-link.styles.scss'

const NavLink = ({link}) => {

    const {linkPath, title} = link;
    const [wrapperHover, setWrapperHover] = useState(false);

    const mouseEnterHandler = () => {
        setWrapperHover(true)
    }

    const mouseLeaveHandler = () => {
        setWrapperHover(false)
    }

    return(
        <div className="link-container">
            <Link className="link-wrapper" to={linkPath} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
                <div className={`link ${wrapperHover && 'link-hover'}`}>{title}</div>
            </Link>
        </div>
    )
}

export default NavLink;