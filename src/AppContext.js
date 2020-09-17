import React, { useEffect, useState } from "react";
import axios from 'axios';

export const AppContext = React.createContext();

const AppContextProvider = ({ children }) => {
    const [menu, setMenu] = useState(false);
    const [fundations, setFundations] = useState([]);
    const [organizations, setOrganizations] = useState([]);
    const [local, setLocal] = useState([]);
    const [desc, setDesc] = useState("");
    const [items, setItems] = useState([]);
    const [fundationName, setFundationName] = useState("Fundacja");
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 3;

    useEffect(() => {
        axios.get("http://localhost:3005/fundations")
            .then(res => {
                setFundations(res.data[0]);
                setDesc(res.data[0].desc);
                setItems(res.data[0].items);
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

    const onSelect = e => {
        const id = e.target.id;
        if (id == 1) {
            setDesc(fundations.desc);
            setItems(fundations.items);
            setFundationName("Fundacja");
        } else if (id == 2) {
            setDesc(organizations.desc);
            setItems(organizations.items);
            setFundationName("Organizacja");
        } else if (id == 3) {
            setDesc(local.desc);
            setItems(local.items);
            setFundationName("Zbiórka");
        }
    }

    const onPage = (e) => {
        setCurrentPage(Number(e.target.id));
    }

    return (
        <AppContext.Provider value={{ menu, openMenu, fundations, organizations, local, onSelect, desc, items, currentPage, perPage, fundationName, onPage }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
