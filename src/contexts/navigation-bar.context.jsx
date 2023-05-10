import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const NavContext = createContext({
    currentRoute: null
})

export const NavContextProvider = ({ children }) => {
    const currentLocation = useLocation();
    const [currentRoute, setCurrentRoute] = useState(currentLocation.pathname);

    useEffect(() => {
        setCurrentRoute(currentLocation.pathname);
    }, [currentLocation]);

    const value = {currentRoute}
    return <NavContext.Provider value={value}>{ children }</NavContext.Provider>
} 