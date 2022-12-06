import * as React from 'react';

import {
    Box,
    createTheme,
    BottomNavigation,
    BottomNavigationAction
} from "@mui/material";
import {
    Menu,
    Search,
    Chat
} from "@mui/icons-material";

import TemporaryDrawer from "./TemporaryDrawer"
import Notifications from "./Notifications";
import {useNavigate} from "react-router-dom"


export default function NavbarMobile() {
    const theme = createTheme();
    const navigate = useNavigate();
    
    const styles = {
        navbar: {
            color: "var(--color-complement-black)",
            cursor: "pointer",
            [theme.breakpoints.up("sm")]: {
                fontSize: "35px"
            }
        }
    }
    
    const navbar = [
        {
            side: "left",
            name: "Menu",
            component: <BottomNavigationAction label="Menu" icon={<Menu sx={styles.navbar} />} />,
            items: [
                {
                    name: "Descubre",
                    icon: ""
                },
                {
                    name: "Crear Proyecto",
                    icon: ""
                },
                {
                    name: "Sobre Nosotros",
                    icon: ""
                },
            ]
        },
        {
            side: "bottom",
            name: "Search",
            component: <BottomNavigationAction label="Search" icon={<Search sx={styles.navbar} />} />
        },
        {
            side: "right",
            name: "Messages",
            component: <BottomNavigationAction label="Messages" icon={<Chat sx={styles.navbar} />} />
        },
        {
            side: "off",
            name: "Notifications",
            component: <BottomNavigationAction onClick={()=> navigate("notifications")} label="Notifications" icon={<Notifications />} />
        },
    
    ]

    const [value, setValue] = React.useState(0);

    return (
        <Box
            sx={{ width: "100%" }}
        >
            <BottomNavigation
                sx={{
                    alignItems: "center",
                    backgroundColor: "var(--color-gray-lofi)",
                    display: "flex",
                    justifyContent: "space-around",
                    padding: "10px",
                    [theme.breakpoints.up("md")]: {
                        display: "none"
                    }
                }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <TemporaryDrawer navbar={navbar} />
            </BottomNavigation>
        </Box>
    );
}

/* 
<BottomNavigationAction
                    label="Menu"
                    icon={
                        <Menu
                            sx={{
                                color: "var(--color-complement-black)",
                                cursor: "pointer",
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "35px"
                                }
                            }}
                        />
                    }
                />
                <BottomNavigationAction
                    label="Search"
                    icon={
                        <Search
                            sx={{
                                color: "var(--color-complement-black)",
                                cursor: "pointer",
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "35px"
                                }
                            }}
                        />
                    }
                />
                <BottomNavigationAction
                    label="Messages"
                    icon={
                        <Chat
                            sx={{
                                color: "var(--color-complement-black)",
                                cursor: "pointer",
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "35px"
                                }
                            }}
                            onClick={() => {
                                console.log("OnCLick")
                            }}
                        />
                    }
                />
                <BottomNavigationAction
                    label="Notifications"
                    icon={
                        <Notifications
                            sx={{
                                color: "var(--color-complement-black)",
                                cursor: "pointer",
                                [theme.breakpoints.up("sm")]: {
                                    fontSize: "35px"
                                }
                            }}
                            onClick={() => {
                                console.log("OnCLick")
                                emitSocketIO(socket)
                                onSocketIO(socket)
                            }}
                        />
                    }
                />
*/