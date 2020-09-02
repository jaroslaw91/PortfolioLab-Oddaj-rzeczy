import React from "react";

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
    const scroll = {
        spy: true,
        smooth: true,
        offset: -100,
        duration: 300
    }

    const { spy, smooth, offset, duration } = scroll;

    return (
        <AppContext.Provider value={{ spy, smooth, offset, duration }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
