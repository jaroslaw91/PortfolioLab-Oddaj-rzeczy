import React, { useEffect, useState } from "react";
import axios from 'axios';

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
    const [menu, setMenu] = useState(false);
    const [fundations, setFundations] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [local, setLocal] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3005/fundations")
            .then(res => {
                setFundations(res.data[0]);
                setOrganizations(res.data[1]);
                setLocal(res.data[2]);
            })
            .catch(error => console.log(error));
    }, []);

    const openMenu = () => {
        menu
            ? setMenu(false)
            : setMenu(true);
    }

    return (
        <AppContext.Provider value={{ menu, openMenu, fundations, organizations, local }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
