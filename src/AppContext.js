import React, { useState } from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
    const [menu, setMenu] = useState(false);

    const scroll = {
        spy: true,
        smooth: true,
        offset: -100,
        duration: 300
    }

    const { spy, smooth, offset, duration } = scroll;

    const openMenu = () => {
        menu
            ? setMenu(false)
            : setMenu(true);
    }

    return (
        <AppContext.Provider value={{ spy, smooth, offset, duration, menu, openMenu }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
