import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import MediaBar from "../components/social-media-bar/social-media-bar.component";

import NavigationBar from "../components/navigation-bar/navigation-bar.component";

const Nav = () => (
    <Fragment>
        <NavigationBar />
        <Outlet />
        <MediaBar />
    </Fragment>
)

export default Nav;