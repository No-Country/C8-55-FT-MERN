import React from 'react'
import { Box, Tabs, Tab, createTheme, Button } from '@mui/material'
import CardProject from '../ProjectCard/CardProject';

const styles = {
    tab: {
        margin: "0 10px",
        "&:focus": {
            borderRadius: "40px",
            backgroundColor: "var(--color-complement-black)",
            color: "var(--color-gray-lofi)"
        }
    }
}

const TabsProjects = () => {

    let theme = createTheme();
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log(theme)

    return (
        <Box sx={{ width: '100%', padding: "30px" }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                indicatorColor="none"
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{ margin: "30px auto", [theme.breakpoints.up("sm")]: { width: "fit-content" } }}
            >
                <Tab
                    sx={styles.tab}
                    value="one"
                    label="Lastest"
                    wrapped
                />
                <Tab value="two" label="Recommended" sx={styles.tab} />
                <Tab value="three" label="Following" sx={styles.tab} />
                <Tab value="four" label="My Projects" sx={styles.tab} />
            </Tabs>

            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <CardProject />
                <CardProject />
                <CardProject />
                <CardProject />
            </Box>

            <Box sx={{ textAlign: "center", padding: "20px" }}>
                <Button sx={{ color: "black", "&:hover": { backgroundColor: "var(--color-gray-lofi)" } }} >
                    View More
                </Button>

            </Box>
        </Box>
    );
}

export default TabsProjects